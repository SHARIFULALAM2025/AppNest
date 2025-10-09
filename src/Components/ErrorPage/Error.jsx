import React from 'react';
import Container from '../Container/Container';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate=useNavigate()
    const handel = () => {
        navigate("/")

    }
    return (
      <div>
        <Container>
          <div className="">
            <div className="text-center space-y-8">
              <figure>
                <img src="/error-404.png" alt="" className="mx-auto" />
              </figure>
              <h1 className="md:text-6xl text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Page Not Found Please go{' '}
              </h1>
              <button
                onClick={handel}
                className="px-16 py-5 rounded-lg text-xl hover:bg-blue-800 hover:cursor-pointer font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
              >
                Back
              </button>
            </div>
          </div>
        </Container>
      </div>
    )
};

export default Error;