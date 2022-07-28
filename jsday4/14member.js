


function valid_check(){
    const frm = document.forms[0];
    const name = frm.name
    const email = frm.email
    const password = frm.password
    let isvalid = true
    

    if(name.value ==''){
        alert('이름은 필수 입력입니다.')
        name.focus()
        isvalid = false
    }

    if(password.value.length < 4){
        alert('패스워드는 4글자 이상입니다.')
        password.focus()
        isvalid=false
    }

    if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.endsWith('.')){
        alert('간단한 형식 체크 실패')
        email.focus()
        isvalid=false
    }

    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if(regEmail.test(email.value)===false){
        alert('입력된 값은 이메일 형식이 아닙니다.')
    }
//     정규표현식은   / / 안에 작성
// ^ 는 시작
// $ 는 끝
// [] 는 [] 안의 문자들중 1개 선택
// * 는 0번 이상 문자 반복
// []? 는 [] 안의 문자들이 있는가? 존재여부
// () 는 그룹
// {n} 는 n개
// {n,m}는 n개 이상, m번 이
    
    let cnt = 0
    frm.hobby.forEach(element => {
        if(element.checked)
            cnt++
    });

    if(cnt==0){    // 자바 스크립트에는 동등 비교 ==, === 이 있습니다. 
                   // 예시) 2 == "2" (데이터 타입 없이 비교) 2==="2" (데이터 타입까지 비교)
        alert('취미는 1개 이상 선택하셔야 합니다.')
        isvalid=false
    }

    if (isvalid){
        console.log('dd')
        frm.action = '13result.html'
        frm.submit

    }else{
        alert('유효성 통과 실패')
    }
}