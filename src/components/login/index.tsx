import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'lib/modal'
import Button from 'lib/button'
import { ReactComponent as Arrow } from 'assets/img/icons/arrow.svg'
import { Input } from 'lib'
import { loginAction } from 'actions/login'

function Login() {
  const [login, setLogin] = useState<string | undefined>('')
  const [password, setPassword] = useState<string | undefined>('')
  const [isValid, setIsValid] = useState<boolean | undefined>(true)

  const dispatch = useDispatch()
  const { status } = useSelector((state: any) => state.login)

  useEffect(() => {
    let loginValid, passwordValid

    if (login && login.length) {
      loginValid = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/.test(login)
    }

    if (password && password.length) {
      passwordValid = !/[^a-z0-9_]/gi.test(password) && password.length > 6
    }

    if (loginValid !== undefined || passwordValid !== undefined) {
      setIsValid(loginValid && passwordValid)
    }
  }, [login, password])

  const onClick = () => {
    if (isValid) {
      dispatch(
        loginAction({
          action: 'login',
          login,
          password,
        }),
      )
    }
  }

  useEffect(() => {
    console.log('status', status)
  }, [status])

  return (
    <div className="login">
      <Modal title="Вход в личный кабинет">
        <Input
          label="Логин"
          type="text"
          value={login}
          onChange={setLogin}
          error={!isValid}
        />
        <Input
          label="Пароль"
          type="password"
          placeholder="*********"
          value={password}
          onChange={setPassword}
          error={!isValid}
        />
        <div className="relative">
          <Button onClick={onClick}>
            Вход <Arrow />
          </Button>
          {!isValid && (
            <p className="login__error error">Неверный логин или пароль</p>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Login
