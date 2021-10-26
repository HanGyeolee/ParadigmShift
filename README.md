# ParadigmShift
본 프로젝트는 [이미 존재하는 프로젝트](https://html5up.net/uploads/demos/paradigm-shift/)를 보고 UI 및 애니메이션을 유추하여 클론 코딩하였습니다.

리액트를 공부하게 되면서 상기시켜야할 만한 부분들을 정리하였습니다.

## [App.js](https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.js)
화면이 처음에 로딩이 된 후에 최상단의 내용에 [FadeIn 애니메이팅](https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.css#L11)을 넣었습니다.
FadeIn 과 동시에 타이틀은 위로, 이미지는 아래로 내려오는 [애니메이팅](https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.css#L155) 또한 동일하게 구현하였습니다.

버튼을 클릭했을 때에 자연스럽게 아래 페이지로 스크롤되는 [애니메이션](https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.js#L37)을 구현하였습니다.
[ref](https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.js#L72)를 지정하여 스크롤이 도착할 위치를 저장하였습니다.

[Astral repository](https://github.com/HanGyeolee/Astral#es6-%EB%AC%B8%EB%B2%95)에서와 동일하게 화면에 표현되는 제목들을 [배열 맵핑]https://github.com/HanGyeolee/ParadigmShift/blob/main/src/App.js#L311)으로 구현하였습니다.
