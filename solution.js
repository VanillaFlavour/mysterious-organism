// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Factory Funtion tahts return an object.
const pAequorFactory = (specimenNum, dna) => {
  return {
    //Properties
    specimenNum: specimenNum,
    dna: dna,

    //Methods
    mutate: function () {
      let randomBase = Math.floor(Math.random() * 15);
      let newBase = dna[randomBase];
      while (newBase === dna[randomBase]) {
        newBase = returnRandBase();
      }
      dna[randomBase] = newBase;
      return this.dna;
    },
    compareDNA: function (specimen) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === specimen.dna[i]) {
          count++;
        }
      }
      console.log(`specimen ${this.specimenNum} and specimen ${specimen.specimenNum} have ${((count / this.dna.length) * 100).toFixed(2)}% DNA in common.`)
    },
    willLikelySurvive: function () {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        }
      }
      const chance = ((count / this.dna.length) * 100).toFixed(2);
      if (chance > 60) return true;
      else return false;
    },
  }
}

//Create 30 instances of pAequor that can survive in their natural environment. 
let survivors = [];
for (let i = 30; i >= survivors.length - 30; i) {
  let x = pAequorFactory(i, mockUpStrand());
  if (x.willLikelySurvive()) {
    survivors.push(x);
    i--;
  }
}


//Tests
const y = pAequorFactory(2, mockUpStrand());
const x = pAequorFactory(1, mockUpStrand());
//console.log(x)
//x.mutate();
//console.log(x)
//x.compareDNA(y)
//console.log(x.willLikelySurvive());
//console.log(survivors)
