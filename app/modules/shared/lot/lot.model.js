"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sqlite = require("nativescript-sqlite");
class Lot {
    constructor() {
        if (!Sqlite.exists("regfees.db")) {
            Sqlite.copyDatabase("regfees.db");
        }
        (new Sqlite("regfees.db")).then(db => {
            this.database = db;
            this.database.resultType(db.RESULTASOBJECT);
            this.database.valueType(db.VALUESARENATIVE);
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }
    fetch(vsellPrice) {
        var vregFee;
        var vcutOff;
        var vincrement;
        var vextraFee;
        var vaddlFee;
        var vincFact;
        var aregFees;
        this.database.get("select regfee, cutoff, increment, extrafee from regfee where sprcll <= ? and sprcul > ?", [vsellPrice, vsellPrice]).then(row => {
            aregFees = row;
            vregFee = Number(aregFees[0]);
            vcutOff = Number(aregFees[1]);
            vincrement = Number(aregFees[2]);
            vextraFee = Number(aregFees[3]);
            console.log(aregFees);
            if (vcutOff != 0) {
                vincFact = Math.round((vsellPrice - vcutOff) / vincrement);
                if ((vsellPrice - vcutOff) % vincrement < 5) {
                    vincFact += 1;
                }
                vaddlFee = vincFact * vextraFee;
                vregFee += vaddlFee;
            }
            console.log("Cutoff: " + vcutOff);
            console.log("Increment: " + vincrement);
            console.log("Selling Price: " + vsellPrice);
            console.log("Computed Reg Fee: " + vregFee);
            return (Number(vregFee));
        }, error => {
            return error;
        });
    }
}
exports.Lot = Lot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG90Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFNUM7SUF3Qkk7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRSxLQUFLO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQWU7UUFDeEIsSUFBSSxPQUFZLENBQUM7UUFDakIsSUFBSSxPQUFZLENBQUM7UUFDakIsSUFBSSxVQUFlLENBQUM7UUFDcEIsSUFBSSxTQUFjLENBQUM7UUFDbkIsSUFBSSxRQUFhLENBQUM7UUFDbEIsSUFBSSxRQUFhLENBQUM7UUFDbEIsSUFBSSxRQUFvQixDQUFDO1FBRXpCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHlGQUF5RixFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDMUksUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNmLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBQyxPQUFPLENBQUMsR0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0QsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxRQUFRLENBQUM7WUFDeEIsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUU1QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU3QixDQUFDLEVBQUUsS0FBSztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0NBRUo7QUE1RUQsa0JBNEVDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvdCB7XHJcbiAgICBcclxuICAvL2JhXHJcbiAgbG90U2l6ZVNRTTogYW55O1xyXG4gIHNlbGxQcmljZTogYW55O1xyXG4gIEZNVjogYW55O1xyXG4gIHpvbmFsVmFsdWU6IGFueTtcclxuICBwcmljZVBlclNRTTogYW55O1xyXG4gIHRyYW5zZmVyVGF4OiBhbnk7XHJcbiAgcmVnaXN0cmF0aW9uOiBhbnk7XHJcbiAgdG90YWxBbXQ6IGFueTtcclxuXHJcbiAgLy9zYVxyXG4gIHByb2ZGZWVSYXRlOiBhbnk7XHJcbiAgbm9uU3RkRXhwZW5zZXM6IGFueTtcclxuICB0YXhCYXNlOiBhbnk7XHJcbiAgY2FwaXRhbEdhaW5zVGF4OiBhbnk7XHJcbiAgZG9jc1N0YW1wOiBhbnk7XHJcbiAgcHJvZkZlZTogYW55O1xyXG4gIG90aGVyRXhwZW5zZXM6IGFueTtcclxuICBuZXRQcm9jZWVkczogYW55O1xyXG5cclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFTcWxpdGUuZXhpc3RzKFwicmVnZmVlcy5kYlwiKSkge1xyXG4gICAgICAgIFNxbGl0ZS5jb3B5RGF0YWJhc2UoXCJyZWdmZWVzLmRiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAobmV3IFNxbGl0ZShcInJlZ2ZlZXMuZGJcIikpLnRoZW4oZGIgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYjtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlLnJlc3VsdFR5cGUoZGIuUkVTVUxUQVNPQkpFQ1QpO1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UudmFsdWVUeXBlKGRiLlZBTFVFU0FSRU5BVElWRSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBwdWJsaWMgZmV0Y2godnNlbGxQcmljZTogYW55ICkge1xyXG4gICAgICAgIHZhciB2cmVnRmVlOiBhbnk7XHJcbiAgICAgICAgdmFyIHZjdXRPZmY6IGFueTtcclxuICAgICAgICB2YXIgdmluY3JlbWVudDogYW55O1xyXG4gICAgICAgIHZhciB2ZXh0cmFGZWU6IGFueTtcclxuICAgICAgICB2YXIgdmFkZGxGZWU6IGFueTtcclxuICAgICAgICB2YXIgdmluY0ZhY3Q6IGFueTtcclxuICAgICAgICB2YXIgYXJlZ0ZlZXM6IEFycmF5PGFueT47XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZ2V0KFwic2VsZWN0IHJlZ2ZlZSwgY3V0b2ZmLCBpbmNyZW1lbnQsIGV4dHJhZmVlIGZyb20gcmVnZmVlIHdoZXJlIHNwcmNsbCA8PSA/IGFuZCBzcHJjdWwgPiA/XCIsIFt2c2VsbFByaWNlLHZzZWxsUHJpY2VdKS50aGVuKHJvdz0+IHtcclxuICAgICAgICAgICAgYXJlZ0ZlZXMgPSByb3c7XHJcbiAgICAgICAgICAgIHZyZWdGZWUgPSBOdW1iZXIoYXJlZ0ZlZXNbMF0pO1xyXG4gICAgICAgICAgICB2Y3V0T2ZmID0gTnVtYmVyKGFyZWdGZWVzWzFdKTtcclxuICAgICAgICAgICAgdmluY3JlbWVudCA9IE51bWJlcihhcmVnRmVlc1syXSk7XHJcbiAgICAgICAgICAgIHZleHRyYUZlZSA9IE51bWJlcihhcmVnRmVlc1szXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZWdGZWVzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2Y3V0T2ZmICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZpbmNGYWN0ID0gTWF0aC5yb3VuZCgodnNlbGxQcmljZS12Y3V0T2ZmKS92aW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICgodnNlbGxQcmljZS12Y3V0T2ZmKSAlIHZpbmNyZW1lbnQgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmluY0ZhY3QgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhZGRsRmVlID0gdmluY0ZhY3QgKiB2ZXh0cmFGZWU7XHJcbiAgICAgICAgICAgICAgICB2cmVnRmVlICs9IHZhZGRsRmVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3V0b2ZmOiBcIiArIHZjdXRPZmYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluY3JlbWVudDogXCIgKyB2aW5jcmVtZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxsaW5nIFByaWNlOiBcIiArIHZzZWxsUHJpY2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVkIFJlZyBGZWU6IFwiICsgdnJlZ0ZlZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChOdW1iZXIodnJlZ0ZlZSkpO1xyXG5cclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59Il19