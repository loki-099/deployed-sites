const sel = document.getElementById('sel')
const html = document.getElementById('html')

function displaySel() {
    if (sel.classList.contains('hidden')) {
        sel.classList.remove('hidden')
        setTimeout(() => {
            sel.classList.remove('opacity-0')
        }, 150)
    }
    else {
        sel.classList.add('opacity-0')
        setTimeout(() => {
            sel.classList.add('hidden')
        }, 150)
    }

}

function dark() {
    html.classList.toggle('dark')
}

// SEARCH FUNCTIONS WORD-PRONUN-AUDIO
const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const wordDisplay = document.getElementById('word')
const pronunciationDisplay = document.getElementById('pronunciation')
const sourceText = document.getElementById('source-link')
const sourceLink = document.getElementById('source')
const defSec = document.getElementById('definition-section')
var word
var pronunciation
var audio
var source


async function search() {
    meaningsList = []
    definitionsArray = []
    synonymsList = []
    try {
        word = document.getElementById('searchArea').value
        if (word == '') {
            document.getElementById('error').innerText = "Whoops, can't be empty..."
            document.getElementById('searchArea').classList.add('border-acc-2')
        }
        else {
            document.getElementById('error').innerText = ""
            document.getElementById('searchArea').classList.remove('border-acc-2')
            let searchResult = await fetch(`${api}${word}`)
            if (searchResult.status == 200) {
                let data = await searchResult.json()
                defSec.classList.remove('hidden')
                
                for (dt of data){
                    if ('phonetic' in dt) {
                        pronunciation = dt.phonetic
                        break;
                    }
                    else if ('phonetics' in dt) {
                        let phonetics = dt.phonetics
                        for (ph of phonetics) {
                            if ('text' in ph) {
                                pronunciation = ph.text
                            }
                        }
                    }
                }
                
                if ('audio' in data[0].phonetics[0] && data[0].phonetics[0].audio !== '') {
                    audio = new Audio(data[0].phonetics[0].audio)
                }
                else {
                    audio = ''
                }
    
            
                wordDisplay.innerText = word
                pronunciationDisplay.innerText = pronunciation
                sourceText.innerText = data[0].sourceUrls[0]
                sourceLink.href = data[0].sourceUrls[0]

                document.getElementById('error-word').classList.add('hidden')
    
                getMeanings(data)
            }
            else {
                // document.getElementById('definition-section').classList.add('hidden')
                // DISPLAY NOT FOUND
                defSec.classList.add('hidden')
                document.getElementById('error-word').classList.remove('hidden')
            }  
        }
    } 
    catch (err) {
        console.log(err)
    }
}

function playAudio() {
    if (audio !== '') {
        audio.play()
    }
    else {
        alert('NO AUDIO SOURCE')
    }
}

// MEANINGS LIST - DEFINITIONS FUNCTIONS
var meaningsList = []
var definitionsArray = []
var synonymsList = []
var exampleList = []


function getMeanings(data) {
    let meanings = data[0].meanings
    for (mn of meanings) {
        if (meaningsList.length <= 1) {
            meaningsList.push(mn.partOfSpeech)
            definitionsArray.push(mn.definitions)
            if (mn.synonyms.length !== 0) {
                synonymsList.push(mn.synonyms[0])
            }
            else {
                synonymsList.push('')
            }
        }
    }
    
    if (meaningsList.length == 2) {
        exampleList = definitionsArray[1].at(-1).example
        document.getElementById('part-1').classList.remove('hidden')
    }
    else {
        document.getElementById('part-1').classList.add('hidden')
    }
    
    displayMeanings()
}

// meaning-0
// list-of-definitions-0

function displayMeanings() {
    let template
    let ind = 0
    template = document.getElementById(`meaning-${ind}`)
    for (mList of meaningsList) {
        ind = meaningsList.indexOf(mList)
        let template = document.getElementById(`meaning-${ind}`)
        template.innerText = mList

        let ulDefs = document.getElementById(`list-of-definitions-${ind}`)
        ulDefs.innerHTML = ''
        for (defList of definitionsArray[ind]) {
            let defText = defList.definition
            let listTemp = `<li class="text-dark-200 text-[16px] dark:text-light-100">${defText}</li>`
            ulDefs.innerHTML += listTemp
        }
    }

    let meanSec = document.getElementById(`meaning-section-0`)
    if (meanSec.contains(document.getElementById('syn-section'))) {
        meanSec.removeChild(meanSec.lastChild)
        displaySyn()
    }
    else {
        displaySyn()
    }

    let example = document.getElementById('example')
    if (example.innerText !== '') {
        example.innerText = ''
        displayExam()
    }
    else {
        displayExam()
    }

}

function displaySyn() {
    let meanSec = document.getElementById(`meaning-section-0`)
    let synWord = synonymsList[0] 

    if (synWord !== '') {
        let synTemp = `<div class="flex items-center" id="syn-section">
        <h2 class="text-[16px] text-light-400">Synonyms</h2>
        <p class="text-[16px] font-bold text-acc-1 ml-4">${synWord}</p>
        </div>`
        meanSec.innerHTML += synTemp
    }
}

function displayExam() {
    if (exampleList !== undefined) {
        example.innerText = exampleList
    }
}

function changeFont(e) {
    let font = e.id
    let isDark = false
    isDark = html.classList.contains('dark')

    html.classList = ''
    html.classList.add(`font-${font}`)
    isDark ? html.classList.add('dark') : []
    document.getElementById('dispFont').innerText = e.innerText
    displaySel()
    
}

document.getElementById('searchArea').addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        search()
    }
})


    




