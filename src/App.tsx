import { Envelope, Lock } from 'phosphor-react'
import { Logo } from './Logo'
import { Text } from './components/Text'
import { Button } from './components/Button'
import { TextInput } from './components/TextInput'
import { Heading } from './components/Heading'

import './styles/global.css'
import { Checkbox } from './components/Checkbox'

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />

      <Heading size='lg' className='mt-4'>
        Ignite Lab
      </Heading>

      <Text size="lg" className="text-gray-400 mt-1">
        Faça login e comece a usar!
      </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="e-mail" className='flex flex-col gap-3'>
          <Text className="font-semi-bold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Digite seu email'/>
          </TextInput.Root>
        </label>

        <label htmlFor="e-mail" className='flex flex-col gap-3'>
          <Text className="font-semi-bold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='********'/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'> Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
        
        
      </footer>
    </div>
  )
}


