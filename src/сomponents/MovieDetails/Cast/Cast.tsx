import CastStyle from './Cast.module.css';
import { ICastProp } from '../../../types/interfaces';

function Cast({ cast }: ICastProp) {
  const { profile_path, name } = cast;

  return (
    <>
      <div className={CastStyle.castContainer}>
        <div className={CastStyle.imgContainer}>
          <img src={profile_path} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    </>
  );
}

export default Cast;
