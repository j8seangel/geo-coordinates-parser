!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).convert=t()}}(function(){function t(t){t=t.replace(/\s\s+/g," ");var r=null,u=null,d="",l="",f=[],E=!1;if(n.test(t)){if(!(E=e(f=n.exec(t))))throw new Error("invalid decimal coordinate format");r=f[2],u=f[6],r.includes(",")&&r.replace(",","."),u.includes(",")&&u.replace(",","."),f[1]?(d=f[1],l=f[5]):f[4]&&(d=f[4],l=f[8])}else if(s.test(t)){if(!(E=e(f=s.exec(t))))throw new Error("invalid DMS coordinates format");r=Math.abs(parseInt(f[2])),f[4]&&(r+=f[4]/60),f[6]&&(r+=f[6]/3600),parseInt(f[2])<0&&(r*=-1),u=Math.abs(parseInt(f[9])),f[11]&&(u+=f[11]/60),f[13]&&(u+=f[13]/3600),parseInt(f[9])<0&&(u*=-1),f[1]?(d=f[1],l=f[8]):f[7]&&(d=f[7],l=f[14])}else if(a.test(t)){if(!(E=e(f=a.exec(t))))throw new Error("invalid DMS coordinates format");r=Math.abs(parseInt(f[2])),f[4]&&(r+=f[4]/60,f[3]||(f[3]=" ")),f[6]&&(r+=f[6]/3600,f[5]||(f[5]=" ")),parseInt(f[2])<0&&(r*=-1),u=Math.abs(parseInt(f[10])),f[12]&&(u+=f[12]/60,f[11]||(f[11]=" ")),f[14]&&(u+=f[14]/3600,f[13]||(f[13]=" ")),parseInt(f[10])<0&&(u*=-1),f[1]?(d=f[1],l=f[9]):f[8]&&(d=f[8],l=f[16])}else if(o.test(t)){if(!(E=e(f=o.exec(t))))throw new Error("invalid coordinates format");r=Math.abs(parseInt(f[2])),f[4]&&(r+=f[4]/60,f[3]||(f[3]=" ")),f[6]&&(r+=f[6]/3600,f[5]||(f[5]=" ")),parseInt(f[2])<0&&(r*=-1),u=Math.abs(parseInt(f[10])),f[12]&&(u+=f[12]/60,f[11]||(f[11]=" ")),f[14]&&(u+=f[14]/3600,f[13]||(f[13]=" ")),parseInt(f[10])<0&&(u*=-1),f[1]?(d=f[1],l=f[9]):f[8]&&(d=f[8],l=f[16])}if(Math.abs(u)>=180)throw new Error("invalid longitude value");if(E){var S,b,c=/S|SOUTH/i;c.test(d)&&r>0&&(r*=-1),(c=/W|WEST/i).test(l)&&u>0&&(u*=-1);var T,h=t.match(/[,\/\u0020]/g);if(null==h){var m=Math.floor(t.length/2);S=t.substring(0,m).trim(),b=t.substring(m).trim()}else{var N=0;if(0==(m=h.length%2==1?Math.floor(h.length/2):h.length/2-1))N=t.indexOf(h[0]),S=t.substring(0,N).trim(),b=t.substring(N+1).trim();else{for(var p=0,g=0;p<=m;)g=(N=t.indexOf(h[p],g))+1,p++;S=t.substring(0,N).trim(),b=t.substring(N+1).trim()}}return(r=r.toString()).includes(",")?(T=r.split(","))[1].length>6&&(T[1]=T[1].substr(0,6)):(T=r.split("."))[1].length>6&&(T[1]=T[1].substr(0,6)),r=T.join("."),(u=u.toString()).includes(",")?(T=u.split(","))[1].length>6&&(T[1]=T[1].substr(0,6)):(T=u.split("."))[1].length>6&&(T[1]=T[1].substr(0,6)),u=T.join("."),{verbatimCoordinates:t,verbatimLatitude:S,verbatimLongitude:b,decimalLatitude:Number(r),decimalLongitude:Number(u),decimalCoordinates:`${r},${u}`,closeEnough:i}}throw new Error("coordinates pattern match failed")}function e(t){var e=t.filter(function(t){return!(!t||""==t)});if(e.shift(),e.length%2>0)return!1;var r=/^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/,i=/[A-Za-z]+/,n=e.length/2;result=!0;for(var s=0;s<n;s++)if(r.test(e[s])!=r.test(e[s+n])||i.test(e[s])!=i.test(e[s+n])){result=!1;break}return result}function r(t,e){return Math.abs(t-e)<=11e-7}function i(t){if(t.includes(",")){var e=t.split(",");if(NaN==Number(e[0])||NaN==Number(e[1]))throw new Error("coords are not valid decimals");return r(this.decimalLatitude,Number(e[0]))&&r(this.decimalLongitude,e[1])}throw new Error("coords being tested must be separated by a comma")}var n=/(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))([\u2022\xba\xb0]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,\/]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))([\u2022\xba\xb0]?)[\s]*(EAST|WEST|[EW])?/i,s=/(NORTH|SOUTH|[NS])?[\ \t]*([+-]?[0-8]?[0-9])[\ \t]*(\.)[\ \t]*([0-5]?[0-9])[\ \t]*(\.)?[\ \t]*((?:[0-5]?[0-9])(?:\.\d{1,3})?)?(NORTH|SOUTH|[NS])?(?:[\ \t]*[,\/][\ \t]*|[\ \t]*)(EAST|WEST|[EW])?[\ \t]*([+-]?[0-1]?[0-9]?[0-9])[\ \t]*(\.)[\ \t]*([0-5]?[0-9])[\ \t]*(\.)?[\ \t]*((?:[0-5]?[0-9])(?:\.\d{1,3})?)?(EAST|WEST|[EW])?/i,a=/(NORTH|SOUTH|[NS])?[\ \t]*([+-]?[0-8]?[0-9])[\ \t]*(D(?:EG)?(?:REES)?)[\ \t]*([0-5]?[0-9])[\ \t]*(M(?:IN)?(?:UTES)?)[\ \t]*((?:[0-5]?[0-9])(?:\.\d{1,3})?)?(S(?:EC)?(?:ONDS)?)?[\ \t]*(NORTH|SOUTH|[NS])?(?:[\ \t]*[,\/][\ \t]*|[\ \t]*)(EAST|WEST|[EW])?[\ \t]*([+-]?[0-1]?[0-9]?[0-9])[\ \t]*(D(?:EG)?(?:REES)?)[\ \t]*([0-5]?[0-9])[\ \t]*(M(?:IN)?(?:UTES)?)[\ \t]*((?:[0-5]?[0-9])(?:\.\d{1,3})?)?(S(?:EC)?(?:ONDS)?)[\ \t]*(EAST|WEST|[EW])?/i,o=/(NORTH|SOUTH|[NS])?[\ \t]*([+-]?[0-8]?[0-9])[\ \t]*([\u2022\xba\xb0\.:]|D(?:EG)?(?:REES)?)?[\ \t]*,?([0-5]?[0-9](?:\.\d{1,})?)?[\ \t]*(['\u2032\xb4\u2019\.:]|M(?:IN)?(?:UTES)?)?[\ \t]*,?((?:[0-5]?[0-9])(?:\.\d{1,3})?)?[\ \t]*(''|\u2032\u2032|\u2019\u2019|\xb4\xb4|["\u2033\u201d\.])?[\ \t]*(NORTH|SOUTH|[NS])?(?:[\ \t]*[,\/][\ \t]*|[\ \t]*)(EAST|WEST|[EW])?[\ \t]*([+-]?[0-1]?[0-9]?[0-9])[\ \t]*([\u2022\xba\xb0\.:]|D(?:EG)?(?:REES)?)?[\ \t]*,?([0-5]?[0-9](?:\.\d{1,})?)?[\ \t]*(['\u2032\xb4\u2019\.:]|M(?:IN)?(?:UTES)?)?[\ \t]*,?((?:[0-5]?[0-9])(?:\.\d{1,3})?)?[\ \t]*(''|\u2032\u2032|\xb4\xb4|\u2019\u2019|["\u2033\u201d\.])?[\ \t]*(EAST|WEST|[EW])?/i;return t.formats=testFormats,t});