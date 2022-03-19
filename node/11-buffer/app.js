const buf = Buffer.from("hi");

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf2[0] = 104;
buf2[1] = 105;
console.log(buf2.toString());
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString());

const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
const new2Buf = Buffer.concat([buf, buf2, buf3]);
console.log(new2Buf.toString());

//버퍼 vs 스트림

//스트림이란?
//1.입출력 데이터를 입출력 순서에 의해서 순차적으로 처리되는 데이터 열
//2.데이터를 이동시킬 수 있는 다리
//3.전송되어야할 크기만큼 바이트들이 모여 만들어진 통로
//4.통신을 목적으로한 바이트 단위의 집합

//버퍼란?
//버퍼는 기본적으로 입출력 전송 속도차이에 대한 성능을 보완하기 위해 사용합니다.
//입력속도에 비해 출력속도가 느린경우 데이터를 임시 저장하는 공간을 말하며, 임시저장장치라고도 합니다.

//버퍼는 스트림을 보관하는 입력 주머니이다.
// 단 게임같은 빠른 반속을 원하는경우 버퍼를 안쓰기도 한다.
