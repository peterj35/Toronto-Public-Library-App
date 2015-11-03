/* CONSTANT VALUES */

// Sample text values
var spanishText = "Consciente de su patrimonio espiritual y moral, la Unión está fundada sobre los valores indivisibles y universales de la dignidad humana, la libertad, la igualdad y la solidaridad, y se basa en los principios de la democracia y el Estado de Derecho. Al instituir la ciudadanía de la Unión y crear un espacio de libertad, seguridad y justicia, sitúa a la persona en el centro de su actuación.",
    frenchText = "Consciente de son patrimoine spirituel et moral, l'Union se fonde sur les valeurs indivisibles et universelles de dignité humaine, de liberté, d'égalité et de solidarité; elle repose sur le principe de la démocratie et le principe de l'État de droit. Elle place la personne au coeur de son action en instituant la citoyenneté de l'Union et en créant un espace de liberté, de sécurité et de justice.",
    englishText = "Toronto Public Library provides free and equitable access to services which meet the changing needs of Torontonians. The Library preserves and promotes universal access to a broad range of human knowledge, experience, information and ideas in a welcoming and supportive environment.",
    germanText = "In dem Bewusstsein ihres geistig-religiösen und sittlichen Erbes gründet sich die Union auf die unteilbaren und universellen Werte der Würde des Menschen, der Freiheit, der Gleichheit und der Solidarität. Sie beruht auf den Grundsätzen der Demokratie und der Rechtsstaatlichkeit. Sie stellt den Menschen in den Mittelpunkt ihres Handelns, indem sie die Unionsbürgerschaft und einen Raum der Freiheit, der Sicherheit und des Rechts begründet.",
    italianText = "Consapevole del suo patrimonio spirituale e morale, l'Unione si fonda sui valori indivisibili e universali della dignità umana, della libertà, dell'uguaglianza e della solidarietà; essa si basa sul principio della democrazia e sul principio dello Stato di diritto. Pone la persona al centro della sua azione istituendo la cittadinanza dell'Unione e creando uno spazio di libertà, sicurezza e giustizia.";

// Sample text values with SSML
var englishSSML = "<p><s>Conscious of its spiritual and moral heritage <break time='1s'/>, the Union is founded on the <prosody rate='slow'>indivisible</prosody>, universal values of human dignity, freedom, equality and solidarity <break time='2s'/> it is based on the <prosody pitch='x-high'>principles of democracy</prosody> and the rule of law <break time='3s'/>. </s> <s> It places the individual at the heart of its activities, by establishing the citizenship of the Union and by creating an area of freedom, security and justice. </s></p>";

window.SPEECH_SYNTHESIS_VOICES = {
    voices: [

    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_AllisonVoice",
        "gender": "female",
        "name": "en-US_AllisonVoice",
        "language": "en-US",
        "description": "English language with US dialect, female.  Higher-quality uncompressed Allison voice."
    },
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_LisaVoice",
      "gender": "female",
      "name": "en-US_LisaVoice",
      "language": "en-US",
      "description": "English language with US dialect, female.  Higher-quality uncompressed Lisa voice."
    }
  ]
}
