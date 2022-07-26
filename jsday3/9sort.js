//배열 정렬 sort

//number
const points = [40, 100, 1, 15, 11, 25]
console.log("초기값 :" + points)
points.sort()  // number의 숫자로 사전식 정렬
console.log("정렬 :" + points)
points.reverse() //내림차순
console.log("역순 정렬 : " + points)
//number의 크기값으로 비교 정렬
points.sort(function(a,b){
    return a-b

})
console.log("number 값 정렬 : " + points)
points.sort(function(a,b){
    return b-a
})
console.log("number 값 정렬 : " + points)

//string
const fruits = ['banana', 'Mango', 'apple', 'orange', 'carrot']
console.log('초기값 : ' + fruits )
fruits.sort()
console.log('정렬 : ' + fruits)
fruits.reverse()
console.log("역순 정렬 : " + fruits)

const cars = [{type:'volvo', year:2016},
                {type:'Saab',year:2001},
                {type:'BMW', year:2010},
                {type:'audi', year:2014}]
console.log('car 배열 초기값 :')
cars.forEach(value => console.log(value))
//객ㅊ는 어떤 속성으로 속성을 기준으로 sort 하는지 콜백함수 작성
cars.sort(function(a,b){
    return a.year-b.year //a, b 는 객체
})
console.log('car 배열 year 순서로 정렬 :')
cars.forEach(value => console.log(value))
cars.sort(function(a, b){  // 오름차순 (문자열 타입일 때)
    if(a.type < b.type) return -1
    else return 1
})
console.log('car 배열 type 순서로 정렬 ::')
cars.forEach(value => console.log(value))

//car 배열, 대소문자 상관없이 type 역순으로 정렬 -> 대소문자 상관없이는
// 문자열을 대문자 또는 소문자로 통일한 후에 비교
function type_reverse(a){

}
cars.sort(function(a, b){
    if(b.type<a.type) return -1
    else return 1
})
console.log('car 배열 type 역순으로 정렬::')
cars.forEach(value => console.log(value))
//대소문자 상관없이
cars.sort(function(a,b){
    if(b.type.toLowerCase() < a.type.toLowerCase()) return -1
    else return 1
})
console.log('car 배열 type 역순으로 정렬(대소문자 무관)::')
cars.forEach(value => console.log(value))

