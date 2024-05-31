import ErrorImage from '../../assets/404.gif'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={ErrorImage} alt="Error Gif image" className='md:w-1/2' />
            <Link to={'/'}><Button color='green'>Go to home</Button></Link>
        </div>
    );
};

export default ErrorPage;