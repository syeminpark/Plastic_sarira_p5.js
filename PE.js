class PE extends Microplastic {

    constructor() {
        super();
        // PE(polyethylene  PP(polypropylene) PS(polystyrene) PA(polyamide) PET(Polyester)  Acrylic  POM(polyoxymethylene) PVC(polyvinyl chloride) PU(polyurethane)
        this.type = "PE(polyethylene";
        this.dateCreated = 1979
        this.originalPurposeList = ["Grocery Bag", "Squeeze Bottle", "Laundry Detergent", "Cutting Board", "Garbage Bin", "Sandwich Bag", "Frozen Ready-Meal Tray", "Cooking Oil Bottles", "First Aid Blankets", "Polar Fleece"]
        this.pastOwnersList;
        this.retrievedMethod;
        this.dateRetrieved;



        this.density = 0.94
        this.tensileStrength = 4554
    }


}