import React from 'react';
import Container from '../Container/Container';
import { useNavigate } from 'react-router';

const ErrorData = () => {
  const navigate = useNavigate()
  const handelBack = () => {
    navigate('/')
  }
    return (
      <div className=" ">
        <Container>
          <div className=" ">
            <div className="text-center space-y-8">
              <figure>
                <img src="/App-Error.png" alt="" className="mx-auto" />
              </figure>
              <h1 className="md:text-6xl text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                App Not Found Please go{' '}
              </h1>
              <button
                onClick={handelBack}
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

export default ErrorData;