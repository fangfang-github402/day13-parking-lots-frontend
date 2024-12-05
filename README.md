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


{ name: "The Plaza Park", capacity: 9, spots: [ { plateNumber: "AB - 1234" }, { plateNumber: "CD - 5678" }, { plateNumber: "EF - 2234" }, // 其他停车位 ] }, { name: "City Mall Garage", capacity: 12, spots: [ { plateNumber: "ZV - 9758" }, // 其他停车位 ] }, { name: "Office Tower Parking", capacity: 9, spots: [ { plateNumber: "GF - 1233" }, { plateNumber: "GH - 4467" }, { plateNumber: "RR - 8643" }, // 其他停车位 ] } parkingStrategies = [ { strategy: "Standard" }, { strategy: "Smart" }, { strategy: "Super Smart" } ] 我想要一个页面，上下两部分，上面一部分用于输入plateNumber、选择parkingStrategy，以及park和fetch两个按钮 下部分展示现有的parkinglot，每个parkinglot用棋盘格展示各个spot的状态，如果当前spot停了一辆车，就显示plateNumber，如果是空spot就显示X