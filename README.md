## 生成模拟数据
Background:
As a Parking Manager, I am responsible for managing three parking lots:
● The Plaza Park (9 parking capacity)
● City Mall Garage (12 parking capacity)
● Office Tower Parking (9 parking capacity)
I have employed three Parking Boys to help manage these parking lots, each utilizing a specific parking strategy:
1. Standard parking strategy
2. Smart parking strategy
3. Super Smart parking strategy
   To optimize management and streamline operations, I need an application that assists me in visualizing and efficiently managing
   the car parking and retrieval process, while also keeping track of the current usage of each parking lot
我正在用react实现这个功能，请你帮我生成前端模拟数据

## 生成界面
{ name: "The Plaza Park", capacity: 9, spots: [ { plateNumber: "AB - 1234" }, { plateNumber: "CD - 5678" }, { plateNumber: "EF - 2234" }, // 其他停车位 ] }, { name: "City Mall Garage", capacity: 12, spots: [ { plateNumber: "ZV - 9758" }, // 其他停车位 ] }, { name: "Office Tower Parking", capacity: 9, spots: [ { plateNumber: "GF - 1233" }, { plateNumber: "GH - 4467" }, { plateNumber: "RR - 8643" }, // 其他停车位 ] } parkingStrategies = [ { strategy: "Standard" }, { strategy: "Smart" }, { strategy: "Super Smart" } ]   
我想要一个页面，上下两部分，上面一部分用于输入plateNumber、选择parkingStrategy，以及park和fetch两个按钮 下部分展示现有的parkinglot，每个parkinglot用棋盘格展示各个spot的状态，如果当前spot停了一辆车，就显示plateNumber，如果是空spot就显示X

## 生成api.js
@GetMapping("/lots") public ResponseEntity<List<parkinglot>> getParkingLots() { List<parkinglot> parkingLots = parkingLotManagerService.getParkingLots(); return ResponseEntity.ok(parkingLots); }</parkinglot></parkinglot>  
@PostMapping("/park")
public ResponseEntity<Ticket> parkCar(@RequestParam String plateNumber, @RequestParam String parkingBoyType) {
Ticket ticket = parkingLotManagerService.parkCar(plateNumber, parkingBoyType);
return ResponseEntity.ok(ticket);
}

@GetMapping("/fetch")
public ResponseEntity<Car> fetchCar(@RequestParam String plateNumber) {
Car car = parkingLotManagerService.fetchCar(plateNumber);
return ResponseEntity.ok(car);
}
请根据我的后端接口编写api.js

## 根据后端返回数据写parkinglot页面
{
"id": 1,
"name": "Plaza Park",
"tickets": [
{
"plateNumber": "AB-1255",
"position": 1,
"parkingLot": 1
},
{
"plateNumber": "AB-5566",
"position": 2,
"parkingLot": 1
}
],
"capacity": 9,
"availableCapacity": 7,
"availablePositionRate": 0.7777777777777778,
"full": false
},
{
"id": 2,
"name": "City Mall Garage",
"tickets": [],
"capacity": 12,
"availableCapacity": 12,
"availablePositionRate": 1.0,
"full": false
},
{
"id": 3,
"name": "Office Tower Parking",
"tickets": [],
"capacity": 9,
"availableCapacity": 9,
"availablePositionRate": 1.0,
"full": false
}
我的parkinglot数据结构是这样的，请你帮我实现parkinglot component，我想要flex布局，一行三个parkinglot。对于每一个parkinglot，都是棋盘格布局，每个格子代表一个position，格子上展示ticket中的plate number，如果当前position没有对应的plate number，就显示X。请你结合ant design组件，适当调整样式，让这个component的ui设计更为美观。