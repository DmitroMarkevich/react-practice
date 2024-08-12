import {ThreeDots} from 'react-loader-spinner';
import {LoaderWrapper} from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
