class PE extends Microplastic {

    constructor() {
        super();

        // PE(polyethylene  PP(polypropylene) PS(polystyrene) PA(polyamide) PET(Polyester)  Acrylic  POM(polyoxymethylene) PVC(polyvinyl chloride) PU(polyurethane)
        this.type = "PE(polyethylene";

        //처음 만들어진 용도 
        this.originalPurposeList = ["Grocery Bag", "Squeeze Bottle", "Laundry Detergent", "Cutting Board", "Garbage Bin", "Sandwich Bag", "Frozen Ready-Meal Tray", "Cooking Oil Bottles", "First Aid Blankets", "Polar Fleece"]
        this.origianlPurpose;

        //이때까지 가지고 있던 생물들과 먹힌 시기, 보유 시기, 주인의 사망시기 

        this.history = {

            OwnerList: [],
            holdTime: [],
            deathDate: []

        }

        //만들어진 시기 
        this.birthday;

        //색깔. 랜덤 
        this.color;

        //크기. 랜덤 
        this.radius;
        //머테리얼 종류 3차원에서만 구현. 투명성
        this.material

        //밀도-다른 물체와 붙어있는 최초의 거리를 조절. 
        this.density = 0.94

        //무게
        this.mass =

            //인장 강도. 사리의 상태에서 조금씩 반복 운동하는 양을 조절.
            this.tensileStrength;

        this.init()


    }

    init() {

        this.orignalPurpose = this.originalPurposeList[int(random(0, this.originalPurposeList.length))]
        this.birthday = int(random(1979, 2021));
        this.color = createVector(random(255), random(255), random(255));
        this.radius = int(random(1, 6))
        //this.mass = this.density * this.radius
        this.mass = random(0, 1)
        this.tensileStrength = map(4554, 0, 12400, 0, 10)

        print(this.mass)
    }

    addOwnerInfo(currentOwnerName, holdTime) {
        this.history.OwnerList.push(currentOwnerName)
        this.history.holdTime.push(holdTime)
        this.history.deathDate.push(holdTime)
    }





}