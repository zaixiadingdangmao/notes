# 位标志（Bit Flags）用法总结

## 基本定义

```javascript
enum Flags {
  FLAG_A = 1 << 0,  // 1   (00000001)
  FLAG_B = 1 << 1,  // 2   (00000010)
  FLAG_C = 1 << 2,  // 4   (00000100)
  FLAG_D = 1 << 3,  // 8   (00001000)
}
```

## 核心操作

### 设置标志
```javascript
let flags = 0;
flags |= Flags.FLAG_A;                    // 设置单个
flags |= Flags.FLAG_B | Flags.FLAG_C;    // 设置多个
```

### 移除标志

```javascript
flags &= ~Flags.FLAG_A;                   // 移除单个
flags &= ~(Flags.FLAG_B | Flags.FLAG_C); // 移除多个
```

### 检查标志
```javascript
(flags & Flags.FLAG_A) !== 0;            // 检查单个
!!(flags & Flags.FLAG_A);                // 布尔检查
(flags & (Flags.FLAG_A | Flags.FLAG_B)) !== 0; // 检查任意一个
```

### 切换标志

```javascript
flags ^= Flags.FLAG_A;                    // 切换单个
flags ^= Flags.FLAG_A | Flags.FLAG_B;    // 切换多个
```

## 实用工具类

```javascript
class FlagManager {
  constructor() { this.flags = 0; }
  
  set(flag) { this.flags |= flag; return this; }
  remove(flag) { this.flags &= ~flag; return this; }
  has(flag) { return (this.flags & flag) !== 0; }
  toggle(flag) { this.flags ^= flag; return this; }
  clear() { this.flags = 0; return this; }
}
```

## 使用示例

```javascript
const flags = new FlagManager();
flags.set(Flags.FLAG_A).set(Flags.FLAG_B);
console.log(flags.has(Flags.FLAG_A));  // true
flags.toggle(Flags.FLAG_A);
console.log(flags.has(Flags.FLAG_A));  // false
```