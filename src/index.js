/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const basicH=500;
      const jsH=800;
      let resH=0;
      let weeks=0;

      knowsProgramming===true?resH=jsH:resH=basicH+jsH;
      resH%config[focus]===0?weeks=resH/config[focus]:weeks=Math.floor(resH/config[focus])+1;

      return weeks;
  };




  