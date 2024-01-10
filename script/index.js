// 1. 변수작성
const height = document.querySelector('#height') 
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
// 2. 변수검사
console.log(height, weight, goals, result)


// 3. 결과보기클릭 작성
result.addEventListener('click',function(){
// 4. 최종목표에 나올 적정체중식 작성
    goals.value = `적정 체중은 ${(height.value-100)*0.9}kg이며${(goals.value - weight.value)}kg 초과되셨습니다.`
// 5. 작성한 적정체중식 검사
    console.log(result)
})