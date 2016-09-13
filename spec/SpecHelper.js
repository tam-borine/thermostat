beforeEach(function() {
  jasmine.addMatchers({

    toChange: function(expectedFunction, options){
      var actionFunction, actualFromValue, actualToValue, expectedFromValue, expectedToValue, fromValueSame, notText, toValueSame;

      notText = (this.isNot ? " not" : "");

      actionFunction = this.actual;

      actualFromValue = expectedFunction();
      actionFunction();
      actualToValue = expectedFunction();

      return actualFromValue !== actualToValue;
    }

  });
});

// beforeEach(function () {
//   jasmine.addMatchers({
//     toBePlaying: function () {
//       return {
//         compare: function (actual, expected) {
//           var player = actual;
//
//           return {
//             pass: player.currentlyPlayingSong === expected && player.isPlaying
//           };
//         }
//       };
//     }
//   });
// });
//
