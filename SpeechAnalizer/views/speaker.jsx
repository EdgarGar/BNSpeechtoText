import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakersView(props) {
  try {
    const results = props.messages.map(msg =>
      // When resultsBySpeaker is enabled, each msg.results array may contain multiple results.
      // The result_index is for the first result in the message,
      // so we need to count up from there to calculate the key.

      // resultsBySpeaker/SpeakerStream sets each results.speaker value once it is known,
      // but can also return results without any speaker set if the speakerlessInterim flag
      // is set (for faster UI updates).
      msg.results.map((result, i=1) => (
        <div key={`result-${msg.result_index + i}`}>
          <dt>{typeof result.speaker === 'number'
          ? result.speaker== 0
             ? ''
             : `Persona ${result.speaker}: `
          : '(Detectando personas): '}
          </dt>
          <dd>
          {
            result.speaker== 0
            ? ''
            : result.alternatives[0].transcript
          }
          </dd>
        </div>
      ))).reduce((a, b) => a.concat(b), []);
      // the reduce() call flattens the array
      ///////////////////////
      //localStorage.setItem('datos', JSON.stringify(result.speaker));
      //var guardado = localStorage.getItem('datos');
      //console.log('objetoObtenido: ', JSON.parse(guardado));
      ///////////////////////
    return (
      <dialog className="speaker-labels">
      {results}
      </dialog>
    );
  } catch (ex) {
  //  console.log(results);
    return (
      <span>{ex.message}</span>
    );
  }
}

SpeakersView.propTypes = {
  messages: PropTypes.array.isRequired, // eslint-disable-line
};
