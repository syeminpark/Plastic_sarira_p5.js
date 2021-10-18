class PP extends Microplastic{

    constructor(radius){
        super()


        ///Data Organization

//private (세상에 영향 안주는 순수 데이터 값)
        //플라스틱 종류 13 종류 
        //PE(polyethylene), PP(polypropylene), PS(polystyrene), PA(polyamide,nylon)
    //polyester, acrylic,pom( polyoxymethylene) ,PVA( polyvinyl alcohol), pvc(polyvinyl chloride),
    //PMA(polymehylacrtlate), PET(polyethylene terephthalate), alkyd, PU(polyurethane)

    
        this.type
        //처음 만들어진 용도 
        this.originalPurpose=
        //이때까지 가지고 있던 생물들과 먹힌 시기, 보유 시기, 먹힌 장소 
        ///core의 경우, 기본적으로 어머니로부터 물려받는다.

        this.previousOwner= {}

        //현재 주인에게 먹힌 시기, 보유 시기 , 먹힌 장소 
        this.currentowner 

        //만들어진 시기 
        this.birthday
        
        //독성
        this.toxidity


//public (가시회돤 형태 )

        //무게
        this.weight

        //색깔. 
        this.color

        //크기
        this.radius

        //착색 정도
        this.colorChangeAmount

        //머테리얼 종류 3차원에서만 구현. 투명성
        this.material

        //밀도-다른 물체와 붙어있는 최초의 거리를 조절. 
        this.density 

        //인장 강도. 사리의 상태에서 조금씩 반복 운동하는 양을 조절.
        this.tensileStrength
        
    }




}