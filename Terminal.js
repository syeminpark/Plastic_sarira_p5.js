class Terminal {

    constructor() {
        this.scrollBarWidth = 15
        this.scrollBarHeight = 80

        this.movableBarWidth = this.scrollBarWidth
        this.movableBarHeight = this.scrollBarHeight + 1

        this.movableBarYPosition = height - this.scrollBarHeight

        this.categoryYPosition = 60
        this.dataYOffset = 0

        this.incrementVPerSentence = 10
        this.firstDataSpace = 2

        this.maxSentenceCount = 5

        this.maxLength = 0


    }
    moveBar() {
        let bottomSpace = 10
        this.movableBarYPosition = constrain(mouseY, height - this.scrollBarHeight, height - this.movableBarHeight)
        this.dataYOffset = map(this.movableBarYPosition, height - this.scrollBarHeight, height - this.movableBarHeight, 0, this.maxLength - height + bottomSpace)
    }


    adjustMovableBarLength() {

        if (this.dataListHeight > this.maxSentenceCount && this.movableBarHeight > 5) {
            this.movableBarHeight = this.scrollBarHeight - this.dataListHeight / 5
        }
    }

    isWithinBarRange() {
        if (mouseY >= height - this.scrollBarHeight && mouseY <= height && mouseX >= width - this.scrollBarWidth && mouseX < width) {
            return true
        } else {
            return false
        }
    }

    showMetaData(metaDataList) {
        let xOffset = 10
        let prevElement = 0;

        push()
        fill(255, 255, 255)
        textSize(6)

        for (let [indexHorizontal, category] of metaDataList.entries()) {
            for (let [indexVertical, metaData] of category.entries()) {
                if (typeof (metaData) === 'object') {
                    metaData = metaData.toString()

                }

                let spaceBetweeenWords = prevElement + 50


                let temp = (indexVertical + this.firstDataSpace) * this.incrementVPerSentence + height - this.categoryYPosition
                text(metaData, indexHorizontal * spaceBetweeenWords + xOffset, temp - this.dataYOffset)
                prevElement = metaData.length

                if (temp > this.maxLength) {
                    this.maxLength = temp
                }


            }
        }
        pop()
        this.dataListHeight = metaDataList[0].length
    }

    drawMetaData() {

    }

    showDataCategory() {
        //Dataset
        push()
        fill(255)
        textSize(8)

        text("Type", 10, height - this.categoryYPosition - this.dataYOffset)
        text("Date Created", 40, height - this.categoryYPosition - this.dataYOffset)
        text("Original Purpose", 105, height - this.categoryYPosition - this.dataYOffset)
        text("Past Owners", 175, height - this.categoryYPosition - this.dataYOffset)
        text("Retrieved Method", 235, height - this.categoryYPosition - this.dataYOffset)
        text("Date Retrieved", 310, height - this.categoryYPosition - this.dataYOffset)
        pop()

    }

    show(metaDataList) {
        //scrollBar
        push()
        fill(100)
        rect(width - this.scrollBarWidth, height - this.scrollBarHeight, this.scrollBarWidth, this.scrollBarHeight)

        //movableBar
        fill(0, 255, 0)
        rect(width - this.movableBarWidth, this.movableBarYPosition, this.movableBarWidth, this.movableBarHeight, 3)

        //line
        noFill()
        stroke(0, 255, 0)
        line(0, height - 80 - this.dataYOffset, width, height - 80 - this.dataYOffset)
        pop()

        this.showDataCategory()
        this.showMetaData(metaDataList)
        this.adjustMovableBarLength()
    }







}