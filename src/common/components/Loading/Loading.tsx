import s from './loading.module.css'
import loader from '../../../assets/img/loader.svg'

export const Loading = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <img src={loader} alt="loader"/>
      </div>
    </div>
  );
};