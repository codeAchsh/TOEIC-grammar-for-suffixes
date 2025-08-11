const wordData = {
  noun: [
    { word: 'communication', example: 'Good communication builds trust.' },
    { word: 'decision', example: 'She made a quick decision.' },
    { word: 'extension', example: 'We requested an extension of the deadline.' },
    { word: 'permission', example: 'He asked for permission to leave early.' },
    { word: 'movement', example: 'The movement gained support quickly.' },
    { word: 'Happiness', example: 'Happiness is the key to a good life.' },
    { word: 'Responsibility', example: 'Responsibility is important in teamwork.' },
    { word: 'performance', example: 'Her performance was outstanding.' },
    { word: 'existence', example: 'The existence of life on Mars is still uncertain.' },
    { word: 'friendship', example: 'Their friendship lasted for years.' },
    { word: 'Childhood', example: 'Childhood memories are precious.' },
    { word: 'Tourism', example: 'Tourism boosts the local economy.' },
    { word: 'storage', example: 'We need more storage space.' },
    { word: 'approval', example: 'He gave his approval for the plan.' },
    { word: 'analysis', example: 'The analysis revealed new insights.' },
    { word: 'Democracy', example: 'Democracy is a core value of the nation.' }
  ],
  verb: [
    { word: 'realize', example: 'I didn’t realize it was so late.' },
    { word: 'finalize', example: 'We need to finalize the schedule today.' },
    { word: 'organise', example: 'They will organise the event next week.' },
    { word: 'advertise', example: 'They plan to advertise the product online.' },
    { word: 'recognise', example: 'I didn’t recognise him at first.' },
    { word: 'activate', example: 'Please activate the alarm system.' },
    { word: 'celebrate', example: 'We will celebrate her birthday this weekend.' },
    { word: 'strengthen ', example: 'We must strengthen our team.' },
    { word: 'widen', example: 'The city plans to widen the road.' },
    { word: 'simplify', example: 'Let’s simplify the instructions.' },
    { word: 'beautify', example: 'Flowers can beautify any space.' }
  ],
  adj: [
    { word: 'creative', example: 'She is a very creative designer.' },
    { word: 'comfortable', example: 'This chair is very comfortable.' },
    { word: 'accessible', example: 'The website is accessible to everyone.' },
    { word: 'dangerous', example: 'That road is dangerous at night.' },
    { word: 'hopeful', example: 'He felt hopeful about the future.' },
    { word: 'careless', example: 'A careless mistake caused the error.' },
    { word: 'historic', example: 'It was a historic moment for the country.' },
    { word: 'special', example: 'This is a special occasion.' },
    { word: 'sunny', example: 'It’s a sunny day today.' },
    { word: 'childish', example: 'His behavior was childish.' },
    { word: 'social', example: 'She enjoys social gatherings.' }
  ],
  adv: [
    { word: 'quickly', example: 'She finished the task quickly.' },
    { word: 'softly', example: 'He spoke softly to avoid waking the baby.' },
    { word: 'clearly', example: 'Please speak clearly during the presentation.' },{ word: 'gently', example: 'She gently placed the book on the shelf.' },
    { word: 'bravely', example: 'He fought bravely in the competition.' },
    { word: 'afterward', example: 'We went shopping afterward.' },
    { word: 'forward', example: 'Please move forward to the front row.' },
    { word: 'upward', example: 'The balloon floated upward into the sky.' },
    { word: 'clockwise', example: 'Turn the knob clockwise to open it.' },    
    { word: 'lengthwise', example: 'Cut the cucumber lengthwise.' },
    { word: 'Healthwise', example: 'Healthwise, walking is a great habit.' }
  ]
};

const typeLabels = {
  noun: '名詞（noun）',
  verb: '動詞（verb）',
  adj: '形容詞（adjective）',
  adv: '副詞（adverb）'
};

function showWords(type) {
  const list = document.getElementById('word-list');
  const label = typeLabels[type] || type;
  const words = wordData[type] || [];

  const wordItems = words.map(item => {
    const regex = new RegExp(`\\b(${item.word})\\b`, 'gi');
    const highlighted = item.example.replace(regex, '<span class="highlight">$1</span>');
    return `<li><span class="example">${highlighted}</span></li>`;
  }).join('');

  list.innerHTML = `
    <h3>${label}の例文：</h3>
    <ul>${wordItems}</ul>
  `;
}