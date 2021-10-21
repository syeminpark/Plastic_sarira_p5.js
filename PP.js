class PP extends Microplastic {

    constructor() {
        super();
        // PE(polyethylene  PP(polypropylene) PS(polystyrene) PA(polyamide) PET(Polyester)  Acrylic  POM(polyoxymethylene) PVC(polyvinyl chloride) PU(polyurethane)
        this.type = "PP(polypropylene)";
        this.originalPurposeList = ["Syringe", "Chip Bag", "Specimen Bottle", "Plastic Chair", "Car Battery Case", "Instrument Panel", "Rug, Lunch Box", "Packing Tape", "Coffee Machine"]
        this.birthday = 1951
        this.density = 0.92
        // this.tensileStrength = 5440  //real 
        this.tensileStrength = 9000
    }

}