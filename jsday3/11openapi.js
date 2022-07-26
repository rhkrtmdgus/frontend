
document.getElementById('search').addEventListener('click', function(){
    const query = document.getElementById('query').value
    const page = document.getElementById('page').value
    const size = document.getElementById('size').value
    //radio 버튼은 선택되었는지
    let sort = document.getElementById('accuracy').checked
    
    //${...}는 ...이 변수, 수식, 함수 ,,, 결과 값을 구해서 출력
    alert(`query=${query}&page=${page}&size=${size}&sort=${sort}`)
    
    if(query == '') alert('검색어는 필수 입력입니다.')
    else search(query, page, size, sort)

})

const search = function(v1, v2, v3, v4){

    //비동기 통신을 위한 객체 생성
    const xhr = new XMLHttpRequest()

    // 1. http요청 초기화 : method, url
    xhr.open("get", `https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`)
    //2. 요청 header 설정
    xhr.setRequestHeader("Authorization", "KakaoAK 3a7bb92c0ade7f46d018da81099ede41");
    //3. http요청 전송
    xhr.send("page=4 & sort = recency")
    //4. onload : 요청에 대한 응답이 왔을 때 실행될 onload 이벤트 핸들러 작성
    xhr.onload = function(){
    //if(xhr.status == 200) // 응답 코드가 200일 때만

    //요청에 대한 응답을 response 프로퍼티가 저장합니다.


    document.getElementById('list').innerHTML=''
    //응답으로 받은 document 객체 배열
    // 객체 구성 : author, datetime, title, url, play-time, thumbnail
    // > 프로퍼티 값들을 태그 요소로 표현 (출력)
    let $response = JSON.parse(xhr.response)
    let results = $response.documents 
    results.forEach(element => {        //result 배열의 각 값들을 순서대로 element가
        // 참조하며 함수 실행합니다.
        const $ul = document.createElement('ul') // 새로운 ul 태그요소 생성
        // ${} : 표현식 기호 변수, 수식, 함수 등등 결과값이 있는 것에 사용 가능
        // (``랑 같이)
        const temp = `<img src="${element.thumbnail}" 
        alt="thumbnail" class = "thumb">
        <li>${element.author}</li>
        <li>${element.title}</li>
        <li>${element.datetime}</li>
        <li>${element.play_time}</li>
        <li><a href = "${element.url}">보러가기</a></li>`
        
        //url은 a태그, thumbnail은 img 태그에 속성 값으로 활용할 수 있습니다.
        $ul.innerHTML = temp
        document.getElementById('list').appendChild($ul) //ul 태그 요소를
                                                        // innerHTML설정
                                                            //ul 태그 요소를 
                                                            // <p id = "list"></p>
                                                            //자식요소로 추가

    })
    }


}

search('우왁굳', 1, 10, 'accuracy')