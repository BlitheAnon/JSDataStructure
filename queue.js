//实现队列
function Queue() {
    this.queue=[];
}

//入队
Queue.prototype.enQueue=function(value) {
    this.queue.push(value);
    return true;
};


//出队
Queue.prototype.deQueue=function() {
    if (!this.isEmpty()) {
        this.queue.shift();
        return true;
    }else{
        return false;
    }
};

//获取队首元素，为空返回-1
Queue.prototype.front=function() {
    if (!this.isEmpty()) {
        return this.queue[0];
    }else{
        return -1;
    }
};


//检查队列是否为空
Queue.prototype.isEmpty=function() {
    return this.queue.length===0;
};

//广度优先，求完全平方数，目标值n
//思路：按0-i，遍历，i*i<n
//得到新一组temp=n-i*i，（按0-i，遍历，i*i<temp）
//temp为0时，返回
var numSquares = function(n) {
    let count=0;
    let queue=new Queue();
    //添加n到队列，每次生成新的n
    queue.enQueue(n);
    //set
    let visited=new Set();
    while (!queue.isEmpty()) {

        count++;
        //遍历队列
        let arr=queue.queue;
        let len=arr.length;
        for (let j=0;j<len;j++) {
            // console.log(arr);
            let first=queue.front();
            for (var i = 1; i*i <=first ; i++) {
                //判断是否结束
                if (first-i*i===0) {
                    return count;
                }else{
                    //添加重复判断,重复不添加
                    if (!visited.has(first-i*i)) {
                        visited.add(first-i*i);
                        queue.enQueue(first-i*i);
                    }
                }
            }

            queue.deQueue();
        }
    }
}

console.log(numSquares(12));
console.log(numSquares(13));


//队列实现广度优先
// function queueBFS(root,target) {
//     let queue=new Queue();
//     let step=0;
//     //查找路径
//     let path=[];
//     queue.enQueue(root);
//     //队列非空时继续
//     while (!queue.isEmpty()) {
//         step++;
//         let len=queue.queue.length;
//         // console.log(len);
//
//         for (var i = 0; i < len; i++) {
//             //取队列第一个元素
//             let first=queue.front();
//             // console.log(first);
//             //找到目标
//             if(target===first.key) return step;
//             //没找到，将子元素加入队列
//             if (first.children) {
//                 first.children.map(item=>{
//                     queue.enQueue(item);
//                 })
//             }
//             //第一位出队，删除已遍历元素
//             queue.deQueue();
//         }
//     }
// }
//
//
// let obj = {
//     key: '1',
//     value: '1',
//     children: [{
//             key: '2-1',
//             value: '2-1',
//             children: [{
//                 key: '3-1',
//                 value: '3-1'
//             }]
//         },
//         {
//             key: '2-2',
//             value: '2-2'
//         }
//     ]
// }
//
// console.log(queueBFS(obj,'2-2'));
