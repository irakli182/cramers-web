import React from 'react'
import "./first.css"
import matrix from "../images/matrix.png"
import two from "../images/2x2.png"
import dice from "../images/dice.png"
import transpose from "../images/transpose.png"

const First = () => {




    function onlyNumbers(str) {
        return /^(?=.*\d)[\d - -]+$/.test(str);
      }

    const reloadPage = () => {
        window.location.reload()
    }

    const showminors = () => {
        const div2 = document.getElementById("minorsdiv")
        div2.style.display = "flex"

    }



    
    const getinfo = () => {
        let num1 = document.getElementById("num1").value
        let num2 = document.getElementById("num2").value
        let num3 = document.getElementById("num3").value
        let num4 = document.getElementById("num4").value
        let num5 = document.getElementById("num5").value
        let num6 = document.getElementById("num6").value
        let num7 = document.getElementById("num7").value
        let num8 = document.getElementById("num8").value
        let num9 = document.getElementById("num9").value


        if ( num1 == "" || num2 == "" || num3 == "" || num4 == "" || num5 == "" || num6 == "" || num7 == "" || num8 == "" || num9 == "" ) {
            alert("fill in all numbers")  // checks if all slots are full // 

        } else if /* if its NOT a number */ ( !onlyNumbers(num1) || !onlyNumbers(num2) || !onlyNumbers(num3) || !onlyNumbers(num4) || !onlyNumbers(num5) || !onlyNumbers(num6) || !onlyNumbers(num7) || !onlyNumbers(num8) || !onlyNumbers(num9)) {
            alert("enter only numbers")

        } else /* inversion */ {


            /* determinant part */
            const div1 = document.getElementById("determinantdivid")
            div1.style.display = "block"
            const determinant = num1 * num5 * num9 + num4 * num8 * num3 + num2 * num6 * num7 - num3 * num5 * num7 - num6 * num8 * num1 - num2 * num4 * num9
            const magaliti = document.getElementById("magaliti")
            magaliti.textContent = `${num1} * ${num5} * ${num9} + ${num4} * ${num8} * ${num3} + ${num2} * ${num6} * ${num7} - ${num3} * ${num5} * ${num7} - ${num6} * ${num8} * ${num1} - ${num2} * ${num4} * ${num9} = ${determinant}` 
            const pasuxi = document.getElementById("pasuxi")
            pasuxi.textContent = `Determinant: ${determinant}`
            const calculation = document.getElementById("calculation")
            calculation.textContent = "calculation:"


            /* minors part */

            let min1 = document.getElementById('1')
            let min2 = document.getElementById('2')
            let min3 = document.getElementById('3')
            let min4 = document.getElementById('4')
    
            let min5 = document.getElementById('5')
            let min6 = document.getElementById('6')
            let min7 = document.getElementById('7')
            let min8 = document.getElementById('8')
            
            
            let min9 = document.getElementById('9')
            let min10 = document.getElementById('10')
            let min11 = document.getElementById('11')
            let min12 = document.getElementById('12')
    
            
            let min13 = document.getElementById('13')
            let min14 = document.getElementById('14')
            let min15 = document.getElementById('15')
            let min16 = document.getElementById('16')
    
            
            let min17 = document.getElementById('17')
            let min18 = document.getElementById('18')
            let min19 = document.getElementById('19')
            let min20 = document.getElementById('20')
    
            
            let min21 = document.getElementById('21')
            let min22 = document.getElementById('22')
            let min23 = document.getElementById('23')
            let min24 = document.getElementById('24')
    
            
            let min25 = document.getElementById('25')
            let min26 = document.getElementById('26')
            let min27 = document.getElementById('27')
            let min28 = document.getElementById('28')
    
            
            let min29 = document.getElementById('29')
            let min30 = document.getElementById('30')
            let min31 = document.getElementById('31')
            let min32 = document.getElementById('32')
    
            
            let min33 = document.getElementById('33')
            let min34 = document.getElementById('34')
            let min35 = document.getElementById('35')
            let min36 = document.getElementById('36')
    
            min1.textContent = num5
            min2.textContent = num6
            min3.textContent = num8
            min4.textContent = num9

            min5.textContent = num4
            min6.textContent = num6
            min7.textContent = num7
            min8.textContent = num9

            min9.textContent = num4
            min10.textContent = num5
            min11.textContent = num7
            min12.textContent = num8

            min13.textContent = num2
            min14.textContent = num3
            min15.textContent = num8
            min16.textContent = num9

            min17.textContent = num1
            min18.textContent = num3
            min19.textContent = num7
            min20.textContent = num9

            min21.textContent = num1
            min22.textContent = num2
            min23.textContent = num7
            min24.textContent = num8

            min25.textContent = num2
            min26.textContent = num3
            min27.textContent = num5
            min28.textContent = num6

            min29.textContent = num1
            min30.textContent = num3
            min31.textContent = num4
            min32.textContent = num6

            min33.textContent = num1
            min34.textContent = num2
            min35.textContent = num4
            min36.textContent = num5

            /* minors determinants */


            let mind1 = min1.textContent * min4.textContent - min2.textContent * min3.textContent  //min1  
            let mind2 = min5.textContent * min8.textContent - min6.textContent * min7.textContent  //min2
            let mind3 = min9.textContent * min12.textContent - min10.textContent * min11.textContent //min3
            let mind4 = min13.textContent * min16.textContent - min14.textContent * min15.textContent  //min4
            let mind5 = min17.textContent * min20.textContent - min18.textContent * min19.textContent  //min5
            let mind6 = min21.textContent * min24.textContent - min22.textContent * min23.textContent //min6
            let mind7 = min25.textContent * min28.textContent - min26.textContent * min27.textContent  //min7
            let mind8 = min29.textContent * min32.textContent - min30.textContent * min31.textContent //min8
            let mind9 = min33.textContent * min36.textContent - min34.textContent * min35.textContent //min9

            let minorDeterminant1 = document.getElementById('mindd1')
            let minorDeterminant2 = document.getElementById('mindd2')
            let minorDeterminant3 = document.getElementById('mindd3')
            let minorDeterminant4 = document.getElementById('mindd4')
            let minorDeterminant5 = document.getElementById('mindd5')
            let minorDeterminant6 = document.getElementById('mindd6')
            let minorDeterminant7 = document.getElementById('mindd7')
            let minorDeterminant8 = document.getElementById('mindd8')
            let minorDeterminant9 = document.getElementById('mindd9')
            
            minorDeterminant1.textContent = mind1
            minorDeterminant2.textContent = mind2
            minorDeterminant3.textContent = mind3
            minorDeterminant4.textContent = mind4
            minorDeterminant5.textContent = mind5
            minorDeterminant6.textContent = mind6
            minorDeterminant7.textContent = mind7
            minorDeterminant8.textContent = mind8
            minorDeterminant9.textContent = mind9

            /* minorDeterminant corrected */

            let corrected1 = document.getElementById("cor1")
            let corrected2 = document.getElementById("cor2")
            let corrected3 = document.getElementById("cor3")
            let corrected4 = document.getElementById("cor4")
            let corrected5 = document.getElementById("cor5")
            let corrected6 = document.getElementById("cor6")
            let corrected7 = document.getElementById("cor7")
            let corrected8 = document.getElementById("cor8")
            let corrected9 = document.getElementById("cor9")

            let corrected11 = document.getElementById("cor11")
            let corrected22 = document.getElementById("cor22")
            let corrected33 = document.getElementById("cor33")
            let corrected44 = document.getElementById("cor44")
            let corrected55 = document.getElementById("cor55")
            let corrected66 = document.getElementById("cor66")
            let corrected77 = document.getElementById("cor77")
            let corrected88 = document.getElementById("cor88")
            let corrected99 = document.getElementById("cor99")

            let corrected111 = document.getElementById("cor111")
            let corrected222 = document.getElementById("cor222")
            let corrected333 = document.getElementById("cor333")
            let corrected444 = document.getElementById("cor444")
            let corrected555 = document.getElementById("cor555")
            let corrected666 = document.getElementById("cor666")
            let corrected777 = document.getElementById("cor777")
            let corrected888 = document.getElementById("cor888")
            let corrected999 = document.getElementById("cor999")


            corrected1.textContent = mind1
            corrected2.textContent = mind2 * -1
            corrected3.textContent = mind3
            corrected4.textContent = mind4 * -1
            corrected5.textContent = mind5
            corrected6.textContent = mind6 * -1
            corrected7.textContent = mind7
            corrected8.textContent = mind8 * -1
            corrected9.textContent = mind9

            corrected11.textContent = mind1
            corrected22.textContent = mind2 * -1
            corrected33.textContent = mind3
            corrected44.textContent = mind4 * -1
            corrected55.textContent = mind5
            corrected66.textContent = mind6 * -1
            corrected77.textContent = mind7
            corrected88.textContent = mind8 * -1
            corrected99.textContent = mind9

            corrected111.textContent = `${mind1} / ${determinant}`
            corrected222.textContent = `${mind2 * -1} / ${determinant}`
            corrected333.textContent = `${mind3} / ${determinant}`
            corrected444.textContent = `${mind4 * -1} / ${determinant}`
            corrected555.textContent = `${mind5} / ${determinant}`
            corrected666.textContent = `${mind6 * -1} / ${determinant}`
            corrected777.textContent = `${mind7} / ${determinant}`
            corrected888.textContent = `${mind8 * -1} / ${determinant}`
            corrected999.textContent = `${mind9} / ${determinant}`

            let sentence = document.getElementById('bbb')
            sentence.textContent = `This means multipling ${determinant} on every component of matrix`
        }
    }

    


  return (
    <div>
    
        <div className='welcomediv'>
            <p id='z1' className='zz'>Matrix Inversion Tool</p>
            <p id='z2' className='zz'>Enter Desired Matrix Below</p>
        </div>


        <div className='inputdiv'>
            <div className='row' id='row1'>
                <input className='input' id='num1' placeholder='R1C1' type={Number}></input>
                <input className='input' id='num2' placeholder='R1C2' type={Number}></input>
                <input className='input' id='num3' placeholder='R1C3' type={Number}></input>
            </div>

            <div className='row' id='row2'>
                <input className='input' id='num4' placeholder='R2C1' type={Number}></input>
                <input className='input' id='num5' placeholder='R2C2' type={Number}></input>
                <input className='input' id='num6' placeholder='R2C3' type={Number}></input>
            </div>

            <div className='row' id='row2'>
                <input className='input' id='num7' placeholder='R3C1' type={Number}></input>
                <input className='input' id='num8' placeholder='R3C2' type={Number}></input>
                <input className='input' id='num9' placeholder='R3C3' type={Number}></input>
            </div>
            
            <div className='buttondiv1'>
                <button className='inverse' onClick={getinfo}>INVERSE</button>
            </div>

        </div>

        <div id='determinantdivid' className='determinantdiv'>
            <p className='determinant'>First, we're gonna calculate matrix determinant using <a className='khan' target="_blank" href='https://www.khanacademy.org/math/linear-algebra/matrix-transformations/determinant-depth/v/linear-algebra-upper-triangular-determinant'>Triangular Method:</a></p>
            <p className='determinant'>Formula:</p>
            <p id='formula' className='determinant'>R1C1 * R2C2 * R3C3 + R2C1 * R3C2 * R1C3 + R1C2 * R2C3 * R3C1 - R1C3 * R2C2 * R3C1 - R2C3 * R3C2 * R1C1 - R1C2 * R2C1 * R3C3</p>
            <img className='matriximg' src={matrix}></img>
            <p className='uu'>( reference image )</p>
            <p className='determinant' id='calculation'></p>
            <p className='determinant' id='magaliti'></p>
            <p className='determinant' id='pasuxi'></p>
            <p id='minorhead' className='determinant'>After that we're gonna split up matrix in <a className='khan' target="_blank" href='https://en.wikipedia.org/wiki/Minor_(linear_algebra)' >minors</a></p>
            <div className='minorbutton'>
                <button onClick={showminors} >Show Minors</button>
            </div>
        </div>


        <div id='minorsdiv'>
            

            <div className='group'>
                <div className='minor'>
                    <div>
                        <p id='1' className='min'>1</p>
                        <p id='3' className='min'>2</p>
                    </div>
                    <div>
                        <p id='2' className='min'>3</p>
                        <p id='4'  className='min'>4</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='5' className='min'>5</p>
                        <p id='7' className='min'>6</p>
                    </div>
                    <div>
                        <p id='6' className='min'>7</p>
                        <p id='8' className='min'>8</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='9' className='min'>9</p>
                        <p id='11' className='min'>10</p>
                    </div>
                    <div>
                        <p id='10' className='min'>11</p>
                        <p id='12' className='min'>12</p>
                    </div>
                </div>
            </div>

            <div className='group'>
                <div className='minor'>
                    <div>
                        <p id='13' className='min'>13</p>
                        <p id='15' className='min'>14</p>
                    </div>
                    <div>
                        <p id='14' className='min'>15</p>
                        <p id='16' className='min'>16</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='17' className='min'>17</p>
                        <p id='19' className='min'>18</p>
                    </div>
                    <div>
                        <p id='18' className='min'>19</p>
                        <p id='20' className='min'>20</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='21' className='min'>21</p>
                        <p id='23' className='min'>22</p>
                    </div>
                    <div>
                        <p id='22' className='min'>23</p>
                        <p id='24' className='min'>24</p>
                    </div>
                </div>
            </div>

            <div className='group'>
                <div className='minor'>
                    <div>
                        <p id='25' className='min'>25</p>
                        <p id='27' className='min'>26</p>
                    </div>
                    <div>
                        <p id='26' className='min'>27</p>
                        <p id='28' className='min'>28</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='29' className='min'>29</p>
                        <p id='31' className='min'>30</p>
                    </div>
                    <div>
                        <p id='30' className='min'>31</p>
                        <p id='32' className='min'>32</p>
                    </div>
                </div>

                <div className='minor'>
                    <div>
                        <p id='33' className='min'>33</p>
                        <p id='35' className='min'>34</p>
                    </div>
                    <div>
                        <p id='34' className='min'>35</p>
                        <p id='36' className='min'>36</p>
                    </div>
                </div>
            </div>

            <div className='mindetdiv'>
                <p className='determinant'>Now we're gonna calculate determinants for each minor.</p>
                <p className='determinant'>Unlike 3x3 matrix, calculating determinant for 2x2 matrix is much simplier:</p>
                <img className='matriximg' src={two}></img>
                <p className='determinant'>After calculating each determinant. we'll get the following matrix:</p>
            </div>

            <div className='newmatrix'>
                
                <div className='group1'>
                    <p className='op' id='mindd1'></p>
                    <p className='op' id='mindd2'></p>
                    <p className='op' id='mindd3'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='mindd4'></p>
                    <p className='op' id='mindd5'></p>
                    <p className='op' id='mindd6'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='mindd7'></p>
                    <p className='op' id='mindd8'></p>
                    <p className='op' id='mindd9'></p>
                </div>

            </div>

            <div className='nishnebidiv'>

                <p className='determinant'>next step is to give our determinants correct + and - symbols</p>
                <p className='determinant'>the process is very simple, imagine a five pointed side of a dice, thats where our + are located</p>

            </div>

                <div className='group1'>
                    <p className='op' id='mindd1'>+</p>
                    <p className='op' id='mindd2'>-</p>
                    <p className='op' id='mindd3'>+</p>
                </div>
                <div className='group1'>
                    <p className='op' id='mindd4'>-</p>
                    <p className='op' id='mindd5'>+</p>
                    <p className='op' id='mindd6'>-</p>
                </div>
                <div className='group1'>
                    <p className='op' id='mindd7'>+</p>
                    <p className='op' id='mindd8'>-</p>
                    <p className='op' id='mindd9'>+</p>
                </div>


            <div className='correcteddiv'>

                <p className='determinant'>So, we get a following matrix:</p>

                <div className='group1'>
                    <p className='op' id='cor1'></p>
                    <p className='op' id='cor2'></p>
                    <p className='op' id='cor3'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor4'></p>
                    <p className='op' id='cor5'></p>
                    <p className='op' id='cor6'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor7'></p>
                    <p className='op' id='cor8'></p>
                    <p className='op' id='cor9'></p>
                </div>
            </div>

            <div className='flipdiv'>
                <p className='determinant'>The next thing we need to do is to Transpose our matrix</p>
                <img className='transpose' src={transpose}></img>
                <p className='determinant'>This basically means swapping colums for rows</p>
                <p className='determinant' >in return we'll get a following matrix</p>

                <div className='group1'>
                    <p className='op' id='cor11'></p>
                    <p className='op' id='cor44'></p>
                    <p className='op' id='cor77'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor22'></p>
                    <p className='op' id='cor55'></p>
                    <p className='op' id='cor88'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor33'></p>
                    <p className='op' id='cor66'></p>
                    <p className='op' id='cor99'></p>
                </div>

            </div>

            <div className='lastdiv'>
                <p className='determinant'>For our last step, we need to multiply reversed ( Det ^ -1 ) determinant on our matrix</p>
                <p className='determinant' id='bbb'></p>
                <p className='determinant'>As an result, we'll get our final answer</p>
                <p className='determinant'>INVERSED MATRIX</p>
                <div className='group1'>
                    <p className='op' id='cor111'></p>
                    <p className='op' id='cor444'></p>
                    <p className='op' id='cor777'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor222'></p>
                    <p className='op' id='cor555'></p>
                    <p className='op' id='cor888'></p>
                </div>
                <div className='group1'>
                    <p className='op' id='cor333'></p>
                    <p className='op' id='cor666'></p>
                    <p className='op' id='cor999'></p>
                </div>
            </div>

            <p className='credit'>credit:</p>
            <a className='uzuz' target='_blank' href='https://portfolio-irakli182.vercel.app/'>Irakli Berikashvili</a>

        </div> 

        

    </div>
  )
}

export default First