import React from "react";

class Nextpage extends React.Component {
    page(id: string) {
        const allpage: any = document.getElementById("r")
        const page: any = allpage.children
        for (let i = 0; i < page.length; i++) {
            page[i].classList.remove('page-number-onclick')
        }
        const num: any = document.getElementById(id)
        num.classList.add('page-number-onclick')

    }
    prev() {
        const allpage: any = document.getElementById("r")
        const page: any = allpage.children
        for (let i = 0; i < page.length; i++) {
            if (page[i].className === 'page-number page-number-onclick') {
                const idpage: string = page[i].id
                if (parseInt(idpage) > 1) {
                    const tg: number = parseInt(idpage) - 1
                    const idp: string = tg.toString()
                    this.page(idp)
                    break;
                }
                break;
            }

        }
    }
    next() {
        const allpage: any = document.getElementById("r")
        const page: any = allpage.children
        for (let a = 0; a < page.length; a++) {
            if (page[a].className === 'page-number page-number-onclick') {
                const idpage: string = page[a].id
                if (parseInt(idpage) < page.length - 2) {
                    const tg: number = parseInt(idpage) + 1;
                    const idp: string = tg.toString();
                    this.page(idp)
                    break;
                }
                break;
            }

        }
    }


    render() {
        return (
            <div id="r" className="next-page">
                <div className="page-number-arow" id="prev" onClick={() => this.prev()}><p>◀</p></div>
                <div className="page-number page-number-onclick" id="1" onClick={() => this.page('1')} ><p>1</p></div>
                <div className="page-number" id="2" onClick={() => this.page('2')}><p>2</p></div>
                <div className="page-number" id="3" onClick={() => this.page('3')}><p>3</p></div>
                <div className="page-number" id="4" onClick={() => this.page('4')} ><p>4</p></div>
                <div className="page-number" id="5" onClick={() => this.page('5')}><p>5</p></div>
                <div className="page-number" id="6" onClick={() => this.page('6')}><p>6</p></div>
                {/* <div className="page-number" id="..." ><p>...</p></div>
                <div className="page-number" id="20" ><p>20</p></div> */}
                <div className="page-number-arow" id="next" onClick={() => this.next()}><p>▶</p></div>
            </div>
        )
    }
}
export default Nextpage;