import React, { useState } from 'react'
import Modal from 'lib/modal'
import Button from 'lib/button'
import { ReactComponent as Arrow } from 'assets/img/icons/arrow.svg'
import { Input } from 'lib'

function Login() {
  const [login, setLogin] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()
  const [isValid, setIsValid] = useState<boolean | undefined>(false)

  return (
    <div className="login">
      <Modal title="Вход в личный кабинет">
        <Input
          label="Логин"
          type="text"
          placeholder="user@mail.ru"
          value={login}
          onChange={setLogin}
          error={isValid}
        />
        <Input
          label="Пароль"
          type="password"
          placeholder="*********"
          value={password}
          onChange={setPassword}
          error={isValid}
        />
        <Button>
          Вход <Arrow />
        </Button>
        {isValid && (
          <p className="login__error error">Неверный логин или пароль</p>
        )}
      </Modal>
    </div>
  )
}

export default Login
