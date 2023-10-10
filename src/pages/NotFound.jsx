import { ReactComponent as NotFoundImage } from '../images/404.svg';
import { PrimaryLink } from '../components';
import PaddingWrapper from '../components/hoc/PaddingWrapper';
import PageTitle from '../components/PageTitle';
import useHandlers from '../utils/hooks/useHandlers';

const ErrorPage = () => {
  const { handleGoBack } = useHandlers();
  return (
    <section className='flex lg:flex-row flex-col items-center z-10'>
      <NotFoundImage />
      <div className='flex flex-col gap-10'>
        <PageTitle
          title='404. Упс, такой страницы у нас нет!'
          subtitle='Нажмите на кнопку чтобы вернуться назад'
        />
        <PrimaryLink title='Назад' outline onClick={handleGoBack} />
      </div>
    </section>
  );
};

export default PaddingWrapper(ErrorPage);
