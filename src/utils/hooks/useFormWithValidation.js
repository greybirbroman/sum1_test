import React, { useState, useCallback } from 'react'

const useFormWithValidation = () => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F0}\u{23F3}\u{24C2}\u{200D}\u{FE0F}\u{20E3}\u{FE0F}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}\u{E01F0}-\u{E0FFF}]/gu;
    const doubleSpaceRegex = /\s{2,}/g;

    const sanitizeFieldValue = (value) => {
        // Удалить пробел в начале строки
        if (value.startsWith(' ')) {
          value = value.trimStart();
        }
        // Удалить двойные пробелы подряд
        value = value.replace(doubleSpaceRegex, ' ');
        // Удалить эмодзи
        value = value.replace(emojiRegex, '');
        return value;
      };

      const handleChange = (event) => {
        const target = event.target;
        const { name, value } = target;
    
        const sanitizedValue = sanitizeFieldValue(value);
    
        setValues((prevValues) => ({
          ...prevValues,
          [name]: sanitizedValue,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: name !== 'confirmPassword' && target.validationMessage,
        }));
        setIsValid(target.closest('form').checkValidity());
      };

      const validatePasswordMatch = useCallback(() => {
        if (values.password !== values.confirmPassword) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: 'Введеные пароли не совпадают',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '',
          }));
        }
      }, [values.password, values.confirmPassword]);
    
      const resetForm = useCallback(() => {
        setValues({});
        setErrors({});
        setIsValid(false);
      }, [setValues, setErrors, setIsValid]);
    

  return {
    values,
    errors,
    handleChange,
    resetForm,
    isValid,
    validatePasswordMatch
  }
   
}

export default useFormWithValidation
