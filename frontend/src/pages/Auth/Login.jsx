import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin();
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-10 space-y-6">
        <div>
          <div className="flex justify-center">
            {/* <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-gray-900 font-bold text-xl">L&F</span>
            </div> */}
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1b1b1b]">
            Sign in
          </h2>
          <p className="mt-3 text-center text-sm font-serif text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium font-serif text-[#7451eb] hover:text-[#7451eb]">
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 input-field ${errors.email ? 'border-red-300 focus:ring-red-500 bg-[#f0f4f6] w-full border rounded-md p-2.5 outline-1 outline-[#7451eb] focus:ring-primary-500' : 'bg-[#f0f4f6] w-full border border-[#80a5b7] rounded-md p-2.5 outline-1 outline-[#7451eb] focus:ring-primary-500'}`}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 input-field ${errors.password ? 'border-red-300 focus:ring-red-500 bg-[#f0f4f6] w-full border  rounded-md p-2.5 outline-1 outline-[#7451eb] focus:ring-primary-500' : 'bg-[#f0f4f6] w-full border border-[#80a5b7] rounded-md p-2.5 outline-1 outline-[#7451eb] focus:ring-primary-500'}`}
                placeholder="Your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-green-500 text-[#7451eb] focus:ring-primary-500 border-[#80a5b7]"
              />
              <label htmlFor="remember-me" className="ml-2 font-medium block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#7451eb] hover:text-[#5b29ff]">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary bg-gradient-to-t from-[#7451eb] to-[#a68ff7] border border-[#4e1def] p-2 rounded-md text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gradient-to-t hover:from-[#fff] hover:to-[#f6f2f6] hover:border-[#7451eb] hover:shadow-md transition duration-300 hover:text-[#7451eb]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;