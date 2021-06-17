import '../styles/404.css';

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1 className="error1" aria-label="404 Error">4<span></span>4</h1>
            <h2 className="error2"> Page not found</h2>

            <div className='error2'>
                <a href="/home"> click to go Back to todo</a>
            </div>
        </div>
    );
};


export default ErrorPage;