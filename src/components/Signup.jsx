import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useNavigate } from "react-router";


const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log('User creted to fb', result.user);
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, createdAt };
                // Save new user in database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('User cretaed to db ', data);
                        if (data.insertedId) {
                            alert('User succesfullt created');
                        }
                        navigate('/users');
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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
                    <p className="pb-4 text-center">Exiting Coffe Drinker? <Link to={'/signin'} className="text-blue-600">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;