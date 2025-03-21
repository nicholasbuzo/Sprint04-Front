'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="mt-40 flex items-center justify-center bg-">
      <div className="max-w-md w-full p-6 bg-slate-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-200 mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-white" required />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-white"required />
          </div>

          <button type="submit" className="w-full bg-sky-800 hover:bg-sky-900 text-white py-2 rounded-lg transition-colors">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;