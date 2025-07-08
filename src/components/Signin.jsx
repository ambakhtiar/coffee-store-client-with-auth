import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router";


const Signin = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // update last sign in time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const logInInfo = { email, lastSignInTime };

                fetch('https://coffee-store-server-one-kappa.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(logInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Signin info updated in db', data);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="pb-4 text-center">New to Coffee drinker? <Link to={'/signup'} className="text-blue-600">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signin;