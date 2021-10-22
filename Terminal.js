class Terminal {

    constructor() {
        this.scrollBarWidth = 15
        this.scrollBarHeight = 80
        this.movableBarWidth = this.scrollBarWidth
        this.movableBarHeight = 80
        this.movableBarYPosition = height - this.scrollBarHeight
        this.categoryList = ["Type", "Date Created", "Original Purpose", "Past Owners", "Retrieved Method", "Date Obtained"]

    }

    //receives metaDataList from sarira class.
    addData(metaDataList) {
        for (let categoryList of metaDataList) {
            for (let metaData of categoryList) {
                console.log(metaData)

            }
        }


    }

    moveBar() {
        if (mouseY > height - this.scrollBarHeight && mouseY < height - this.movableBarHeight) {
            if (mouseX > width - this.scrollBarWidth && mouseX < width)
                this.movableBarYPosition = mouseY
        }
    }

    adjustMovableBarLength() {
        this.movableBarHeight;
    }



    show() {
        //scrollBar
        push()
        fill(100)

        rect(width - this.scrollBarWidth, height - this.scrollBarHeight, this.scrollBarWidth, this.scrollBarHeight)
        pop()

        //movableBar
        push()
        fill(0, 255, 0)
        rect(width - this.movableBarWidth, this.movableBarYPosition, this.movableBarWidth, this.movableBarHeight, 5)
        pop()

        //Data box
        push()
        stroke(0, 255, 0)
        line(0, height - 80, width, height - 80, )
        pop()

        //Dataset
        push()
        fill(255)
        textSize(8)
        text("Type", 10, height - 60)
        text("Date Created", 40, height - 60)
        text("Original Purpose", 105, height - 60)
        text("Past Owners", 175, height - 60)
        text("Retrieved Method", 235, height - 60)
        text("Date Retrieved", 310, height - 60)
        pop()
    }
}