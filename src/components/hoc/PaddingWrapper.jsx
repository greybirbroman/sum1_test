const PaddingWrapper = (WrappedComponent) => {
  return (props) => (
    <div className='flex-grow flex flex-col w-full max-w-[1440px] lg:px-[128px] lg:py-[28px] p-[20px]'>
      <WrappedComponent {...props} />
    </div>
  );
};

export default PaddingWrapper;
