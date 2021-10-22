class Terminal {

    constructor() {

        this.scrollBarWidth = 15
        this.scrollBarHeight = 80
        this.movableBarHeight = 20
        this.categoryList = ["Type", "Date Created", "Original Purpose", "Past Owners", "Retrieved Method", "Date Obtained"]
    }

    scrollBar() {
        push()
        fill(100)

        rect(width - this.scrollBarWidth, height - this.scrollBarHeight, this.scrollBarWidth, this.scrollBarHeight)
        pop()

        this.movableBar()
    }

    movableBar() {
        push()
        fill(0, 255, 0)
        constrain(mouseY, height - this.scrollBarHeight, height)
        console.log(mouseY)
        rect(width - this.scrollBarWidth, height - this.scrollBarHeight, this.scrollBarWidth, this.movableBarHeight, 5)
        pop()
    }


    showData() {

        push()
        stroke(0, 255, 0)
        line(0, height - 80, width, height - 80, )


        pop()

        push()
        fill(255)
        textSize(8)

        text("Type", 10, height - 60)
        text("Date Created", 40, height - 60)
        text("Original Purpose", 105, height - 60)
        text("Past Owners", 175, height - 60)
        text("Retrieved Method", 235, height - 60)
        text("Date Obtained", 310, height - 60)


        pop()


    }
}