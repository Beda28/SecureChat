import { BackgroundA } from '../components/Box/Background'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { checkExp } from '../utils/token'
import { CheckBox, LoginBox } from '../components/Box/Login'
import { CheckP, LoginTitle, SubTitle } from '../components/Text/Login'
import { LoginButton } from '../components/Button/Button'
import { InputA } from '../components/Input/Input'

const Index = () => {
    const [login, setlogin] = useState(true);
    const [id, setid] = useState('');
    const [pw, setpw] = useState('');
    const navigate = useNavigate();

    const changeLogin = (type: boolean) => {
        if (login == !type) {
            setlogin(type)
            setid('')
            setpw('')
        }
    }

    const submitButton = async () => {
        try{
            if (id.length < 4 || id.length > 10) return alert("ID는 4자 이상 10자 이하여야 합니다.");
            if (pw.length < 4 || pw.length > 255) return alert("비밀번호는 4자 이상 255자 이하여야 합니다.");
            if (!/^[a-zA-Z0-9]+$/.test(id)) return alert("ID는 영어와 숫자만 포함할 수 있습니다.");
            if (!/^[a-zA-Z0-9@!*]+$/.test(pw)) return alert("비밀번호는 영어, 숫자, @, !, * 만 포함할 수 있습니다.");
            if (pw.includes(id)) return alert("비밀번호에 ID를 포함할 수 없습니다.");
            
            const response = await axios.post(`/api/user/${(login) ? "login" : "register"}`, {
                user_id : id,
                user_pw : pw
            })

            if (response.data.message) return alert(`${login ? "로그인" : "회원가입"} 실패`)
            
            localStorage.setItem("SecuerChat_Token", response.data.token)
            alert(login ? "로그인 성공" : "회원가입 성공")
        }catch(e){
            alert("서버 오류")
            console.log(e)
        }

        CheckToken()
    }

    const CheckToken = () => {
        if (checkExp()) navigate('/friends')
    }

    useEffect(() => {
        CheckToken()
    }, [])

    return <>
        <BackgroundA>
            <LoginBox>
                <LoginTitle>Secure Chat</LoginTitle>
                <CheckBox>
                    <CheckP $active={login} onClick={() => changeLogin(true)}>로그인</CheckP>
                    <CheckP $active={!login} onClick={() => changeLogin(false)}>회원가입</CheckP>
                </CheckBox>
                <SubTitle>아이디</SubTitle>
                <InputA placeholder='아이디를 입력해주세요' onChange={(e) => setid(e.target.value)} value={id}/>
                <SubTitle>비밀번호</SubTitle>
                <InputA placeholder='비밀번호를 입력해주세요' type='password' onChange={(e) => setpw(e.target.value)} value={pw}/>
                <LoginButton onClick={submitButton}>{login ? '로그인' : '회원가입'}</LoginButton>
            </LoginBox>
        </BackgroundA>
    </>
}

export default Index