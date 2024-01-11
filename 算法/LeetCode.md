# LeetCode 算法题

- [LeetCode 算法题](#leetcode-算法题)
  - [两数之和](#两数之和)
  - [两数相加](#两数相加)
  - [无重复字符的最长子串](#无重复字符的最长子串)
    - [滑动窗口](#滑动窗口)
    - [双指针](#双指针)
  - [寻找两个正序数组的中位数](#寻找两个正序数组的中位数)
  - [最长回文子串](#最长回文子串)
    - [暴力算法](#暴力算法)
    - [动态规划](#动态规划)
  - [Z 字形变换](#z-字形变换)
    - [矩阵模拟](#矩阵模拟)
    - [Z 形变化](#z-形变化)
  - [整数反转](#整数反转)
  - [字符串转换整数 (atoi)](#字符串转换整数-atoi)
  - [回文数](#回文数)
    - [翻转法](#翻转法)
    - [指针查找](#指针查找)
  - [正则表达式匹配](#正则表达式匹配)
  - [盛最多水的容器](#盛最多水的容器)
  - [整数转罗马数字](#整数转罗马数字)
  - [罗马数字转整数](#罗马数字转整数)
  - [最长公共前缀](#最长公共前缀)
  - [三数之和](#三数之和)
  - [最接近的三数之和](#最接近的三数之和)
  - [电话号码的字母组合](#电话号码的字母组合)
  - [四数之和](#四数之和)
  - [删除链表的倒数第 N 个结点](#删除链表的倒数第-n-个结点)
    - [单调栈](#单调栈)
    - [计算链表长度](#计算链表长度)
  - [有效的括号](#有效的括号)
  - [合并两个有序链表](#合并两个有序链表)
    - [递归](#递归)
    - [迭代](#迭代)
  - [括号生成](#括号生成)
    - [回溯](#回溯)
  - [合并 K 个升序链表](#合并-k-个升序链表)
    - [逃课算法](#逃课算法)
    - [分治](#分治)
  - [两两交换链表中的节点](#两两交换链表中的节点)
    - [递归](#递归-1)
    - [迭代](#迭代-1)
  - [K 个一组翻转链表](#k-个一组翻转链表)
  - [反转链表](#反转链表)
  - [删除有序数组中的重复项](#删除有序数组中的重复项)
  - [移除元素](#移除元素)
  - [实现 strStr()](#实现-strstr)
    - [截取支付串](#截取支付串)
    - [暴力算法](#暴力算法-1)
  - [两数相除](#两数相除)
  - [串联所有单词的子串](#串联所有单词的子串)
  - [下一个排列](#下一个排列)
  - [最长有效括号](#最长有效括号)
  - [搜索旋转排序数组](#搜索旋转排序数组)
  - [在排序数组中查找元素的第一个和最后一个位置](#在排序数组中查找元素的第一个和最后一个位置)
  - [搜索插入位置](#搜索插入位置)
  - [有效的数独](#有效的数独)
  - [解数独](#解数独)
    - [基础回溯版本](#基础回溯版本)
    - [空间换时间回溯版本](#空间换时间回溯版本)
  - [外观数列](#外观数列)
    - [滚动遍历 + 指针](#滚动遍历--指针)
    - [递归 + 指针](#递归--指针)
  - [组合总和](#组合总和)
    - [回溯](#回溯-1)
  - [组合总和 II](#组合总和-ii)
    - [回溯](#回溯-2)
  - [缺失的第一个正数](#缺失的第一个正数)
    - [哈希表](#哈希表)
    - [交换法](#交换法)
  - [接雨水](#接雨水)
    - [单调栈](#单调栈-1)
    - [双指针](#双指针-1)
  - [字符串相乘](#字符串相乘)
  - [通配符匹配](#通配符匹配)
  - [跳跃游戏 II](#跳跃游戏-ii)
    - [反向模拟跳跃](#反向模拟跳跃)
    - [贪婪算法](#贪婪算法)
  - [全排列](#全排列)
    - [回溯](#回溯-3)
  - [全排列 II](#全排列-ii)
    - [回溯](#回溯-4)
  - [旋转图像](#旋转图像)
  - [借助数组](#借助数组)
    - [原地翻转](#原地翻转)
  - [字母异位词分组](#字母异位词分组)
    - [数组排序哈希表](#数组排序哈希表)
    - [字母出现次数哈希表](#字母出现次数哈希表)
  - [Pow(x, n)](#powx-n)
  - [N 皇后](#n-皇后)
  - [N 皇后 II](#n-皇后-ii)
    - [回溯](#回溯-5)
  - [最大子数组和](#最大子数组和)
  - [螺旋矩阵](#螺旋矩阵)
    - [模拟移动](#模拟移动)
  - [跳跃游戏](#跳跃游戏)
    - [反向查找](#反向查找)
    - [模拟跳跃](#模拟跳跃)
  - [合并区间](#合并区间)
  - [插入区间](#插入区间)
  - [最后一个单词的长度](#最后一个单词的长度)
  - [螺旋矩阵 II](#螺旋矩阵-ii)
  - [排列序列](#排列序列)
    - [规律法](#规律法)
  - [ 旋转链表](#-旋转链表)
  - [不同路径](#不同路径)
    - [动态规划](#动态规划-1)
    - [空间优化版](#空间优化版)
  - [不同路径 II](#不同路径-ii)
  - [最小路径和](#最小路径和)
  - [有效数字](#有效数字)
  - [加一](#加一)
  - [二进制求和](#二进制求和)
  - [文本左右对齐](#文本左右对齐)
  - [x 的平方根](#x-的平方根)
  - [爬楼梯](#爬楼梯)
  - [简化路径](#简化路径)
  - [编辑距离](#编辑距离)
  - [矩阵置零](#矩阵置零)
  - [搜索二维矩阵](#搜索二维矩阵)
    - [模拟坐标](#模拟坐标)
    - [二分查找](#二分查找)
  - [颜色分类](#颜色分类)
    - [双指针](#双指针-2)
  - [最小覆盖子串](#最小覆盖子串)
  - [组合](#组合)
  - [子集](#子集)
    - [回溯 1](#回溯-1)
    - [回溯 2](#回溯-2)
  - [单词搜索](#单词搜索)
  - [删除有序数组中的重复项 II](#删除有序数组中的重复项-ii)
  - [搜索旋转排序数组 II](#搜索旋转排序数组-ii)
  - [删除排序链表中的重复元素 II](#删除排序链表中的重复元素-ii)
  - [删除排序链表中的重复元素](#删除排序链表中的重复元素)
  - [柱状图中最大的矩形](#柱状图中最大的矩形)
  - [最大矩形](#最大矩形)
    - [暴力解法](#暴力解法)
    - [单调栈](#单调栈-2)
  - [分隔链表](#分隔链表)
  - [合并两个有序数组](#合并两个有序数组)
  - [子集 II](#子集-ii)
  - [解码方法](#解码方法)
  - [反转链表 II](#反转链表-ii)
  - [复原 IP 地址](#复原-ip-地址)
    - [回溯法](#回溯法)
  - [二叉树的中序遍历](#二叉树的中序遍历)
    - [递归](#递归-2)
    - [迭代](#迭代-2)
  - [零钱兑换](#零钱兑换)
  - [二叉树中的最大路径和](#二叉树中的最大路径和)

## [两数之和](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

> 遍历数据把 **当前值** 和 **下标** 存起来，然后在数据中去找是否有匹配的值

```js
var twoSum = function (nums, target) {
  // 创建一个Map {数值 => 下标}
  let map = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    // 当前值
    let item = nums[i];
    // 目标值 - 当前值 = 第二个整数
    let t = target - item;
    // 是否包含第二个整数
    if (map.has(t)) {
      return [map.get(t), i];
    }
    // 保存当前值 和 下标
    map.set(item, i);
  }
};
```

## [两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

给你两个   非空 的链表，表示两个非负的整数。它们每位数字都是按照   逆序   的方式存储的，并且每个节点只能存储   一位   数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807

> 链表都是逆序的，因此链表可以同一位置相加，然后大于 10 需要进位 及 `sum % 10` 得到个位数 `Math.floor(sum / 10)` 为十位数 后面每进一位都需要加进位数 最后如果还有进位数需要添加到最后

```js
var addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null,
    carray = 0;

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;

    // 当前为两位之和 + 进位数
    const sum = n1 + n2 + carray;

    // % 10
    const node = new ListNode(sum % 10);

    if (!head) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }

    // 进位数
    carray = ~~(sum / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // 最后是否还需要进位
  if (carray > 0) tail.next = new ListNode(carray);

  return head;
};
```

## [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

> 滑动窗口 创建一个记录表存放不重复的字符，如果存在就移动记录表让记录表不包含重复元素，最后统计记录表最长时的长度

### 滑动窗口

```js
var lengthOfLongestSubstring = function (s) {
  let length = s.length;
  let maxLength = 0;
  // 记录表
  let arr = [];

  for (let i = 0; i < length; i++) {
    // 取出对应字符串下标字符
    let t = s.charAt(i);
    //  记录表中是否包含
    let index = arr.indexOf(t);
    // 如果存在字符 从记录表中剔除存在的字符
    if (index >= 0) arr.splice(0, index + 1);
    // 添加新字符
    arr.push(t);
    // 对比最大长度
    maxLength = Math.max(maxLength, arr.length);
  }

  return maxLength;
};
```

### 双指针

```js
var lengthOfLongestSubstring = function (s) {
  const { length } = s;
  // 记录表
  const map = new Map();
  // 动态窗口左指针
  let left = 0;
  let maxLen = 0;
  // 扩展右指针
  for (let right = 0; right < length; right++) {
    const t = s[right];
    // 记录表中包含该元素，并且该元素的下标大于左指针（即是否在窗口内部）
    if (map.has(t) && map.get(t) >= left) {
      // 移动左指针
      left = map.get(t) + 1;
    }
    // 添加到记录表
    map.set(t, right);
    // 计算最长长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
```

## [寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

给定两个大小分别为 m 和 n 的正序（从小到大）数组  nums1 和  nums2。请你找出并返回这两个正序数组的 中位数
算法的时间复杂度应该为 O(log (m+n))

```js
// 二分查找法
var findMedianSortedArrays = (nums1, nums2) => {
  let len1 = nums1.length,
    len2 = nums2.length;
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1); //对nums1和nums2中长度较小的二分
  let len = len1 + len2; //总长
  let start = 0,
    end = len1; //进行二分的开始和结束位置
  let partLen1, partLen2;

  while (start <= end) {
    partLen1 = (start + end) >> 1; //nums1二分的位置
    partLen2 = ((len + 1) >> 1) - partLen1; //nums2二分的位置

    //L1:nums1二分之后左边的位置，R1，nums1二分之后右边的位置
    //L2:nums2二分之后左边的位置，R2，nums2二分之后右边的位置

    //如果左边没字符了，就定义成-Infinity，让所有数都大于它，否则就是nums1二分的位置左边一个
    let L1 = partLen1 === 0 ? -Infinity : nums1[partLen1 - 1];
    //如果左边没字符了，就定义成-Infinity，让所有数都大于它，否则就是nums2二分的位置左边一个
    let L2 = partLen2 === 0 ? -Infinity : nums2[partLen2 - 1];
    //如果右边没字符了，就定义成Infinity，让所有数都小于它，否则就是nums1二分的位置
    let R1 = partLen1 === len1 ? Infinity : nums1[partLen1];
    //如果右边没字符了，就定义成Infinity，让所有数都小于它，否则就是nums1二分的位置
    let R2 = partLen2 === len2 ? Infinity : nums2[partLen2];

    if (L1 > R2) {
      //不符合交叉小于等于 继续二分
      end = partLen1 - 1;
    } else if (L2 > R1) {
      //不符合交叉小于等于 继续二分
      start = partLen1 + 1;
    } else {
      // L1 <= R2 && L2 <= R1 符合交叉小于等于
      return len % 2 === 0
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2 //长度为偶数返回作左侧较大者和右边较小者和的一半
        : Math.max(L1, L2); //长度为奇数返回作左侧较大者
    }
  }
};
```

## [最长回文子串](https://leetcode-cn.com/problems/edian-of-two-sorted-arrays/)

给你一个字符串 s，找到 s 中最长的回文子串。

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

### 暴力算法

> 两个 for 循环一个个去比对，如果是回文串并记录最大值

```js
var longestPalindrome = function (s) {
  let length = s.length;

  if (length < 2) return s;

  let maxLength = 1;
  let begin = 0;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (j - i + 1 > maxLength && validPalindromic(s, i, j)) {
        maxLength = j - i + 1;
        begin = i;
      }
    }
  }

  /**
   * 判断是否为回文字
   * @param {*}
   * @return {*}
   */
  function validPalindromic(s, left, right) {
    while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  return s.substring(begin, begin + maxLength);
};
```

### 动态规划

> 把复杂的问题具体化，分为一个表格，对角线上的值一定相等，然后对比相邻的字符是否相等，最后判断长子串是否相等时只用判断当前是否相等和前一个字符是否相等即可

```js
// 动态规划
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLength = 1;
  let begin = 0;

  // 创建 一个二维数据表格
  let dp = Array.from(new Array(len), () => new Array(len).fill(false));
  // 循环二维表格
  for (let i = 0; i < len; i++) {
    // 对角线字母永远相等
    dp[i][i] = true;
    updatePalindrome(i, i);

    // 两两对比,前一个是否等于后一个
    if (s.charAt(i - 1) === s.charAt(i)) {
      dp[i - 1][i] = true;
      updatePalindrome(i - 1, i);
    }

    // 多数对比 当前值是否相等 && 前一个值是否也相等
    for (let j = i - 2; j >= 0; j--) {
      if (s.charAt(j) === s.charAt(i) && dp[j + 1][i - 1]) {
        dp[j][i] = true;
        updatePalindrome(j, i);
      }
    }
  }

  // 更新回文串 是否需要重新计算起始位置和最大长度
  function updatePalindrome(left, right) {
    if (maxLength < right - left + 1) {
      maxLength = right - left + 1;
      begin = left;
    }
  }

  return s.substring(begin, begin + maxLength);
};
```

## [Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)

将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行  Z 字形排列。
比如输入字符串为 "PAYPALISHIRING"  行数为 3 时，排列如下：

```
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"

### 矩阵模拟

> 矩阵模拟 `周期字符长度 t = numRows * 2 - 2` 计算出二维矩阵的长度 `c = Math.floor(n / t) * (r - 1)`，从 `[0，0]` 开始移动指针，Z 字形移动，最后拼接数组

```js
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows;
  if (r === 1 || r >= n) return s;
  const t = r * 2 - 2; // 一个周期的字符长度
  const c = Math.floor(n / t) * (r - 1); // 模拟二维矩阵的数组长度
  // 矩阵
  const mat = new Array(r).fill(0).map(() => new Array(c));
  for (let i = 0, x = 0, y = 0; i < n; ++i) {
    mat[x][y] = s[i];
    if (i % t < r - 1) {
      ++x; // 向下移动
    } else {
      --x;
      ++y; // 向右上移动
    }
  }
  // 拼接数组
  const ans = [];
  mat.forEach((row) => {
    row.forEach((ch) => {
      ans.push(ch);
    });
  });

  return ans.join('');
};
```

### Z 形变化

> 每一行当作一个字符串，控制指针的方向上下移动，拼接字符串即可

```js
var convert = function (s, numRows) {
  const r = numRows;
  const length = s.length;
  if (r === 1 || length === 1) return s;
  // 创建一个长度为行数的数组
  const stringList = new Array(r).fill('');
  let row = 0;=
  // 控制指针方向
  let direction = true;
  for (let i = 0; i < length; i++) {
    stringList[row] += s.charAt(i);

    if (direction) {
      row++;
    } else {
      row--;
    }

    if (row === 0) {
      direction = true;
    } else if (row === r - 1) {
      direction = false;
    }
  }
  return stringList.join('');
};
```

## [整数反转](https://leetcode-cn.com/problems/reverse-integer/)

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围  [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）

输入：x = 123
输出：321

输入：x = -123
输出：-321

> 按位取反，首先取出最后一位 `n = x % 10` 然后重新赋值 `x = ~~(x / 10)` 反复这个操作，直倒 `x === 0`

```js
var reverse = function (x) {
  let resNum = 0;

  while (x !== 0) {
    let n = x % 10;
    // ~~ 按位取反 可以直接理解为干掉小数部分
    x = ~~(x / 10);
    resNum = resNum * 10 + n;
  }

  if (Math.abs(resNum) > Math.pow(2, 31)) return 0;
  return resNum;
};
```

## [字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)

请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）

输入：s = " -42"
输出：-42

输入：s = "4193 with words"
输出：4193

> 去除两端空格后第一位就是符号，判断正负，然后遇到非数值的值直接结束循环 最后判断结果的大小

```js
var myAtoi = function (s) {
  s = s.trim(); // 去除两端空格
  const len = s.length;
  let num = 0;
  let f = 1;

  for (let i = 0; i < len; i++) {
    const t = s.charAt(i);
    //  改变符号
    if (!i) {
      if (t === '-') {
        f = -1;
        continue;
      } else if (t === '+') {
        f = 1;
        continue;
      }
    }

    if (!/\d/.test(t)) break;

    num = num * 10 + (t - 0);

    // 大于 最大值直接跳出去
    if (num * f > Math.pow(2, 31) - 1) {
      return (num = Math.pow(2, 31) - 1);
    }

    if (num * f < Math.pow(-2, 31)) {
      return (num = Math.pow(-2, 31));
    }
  }
  return num * f;
};
```

## [回文数](https://leetcode-cn.com/problems/palindrome-number/)

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数

输入：x = 121
输出：true

输入：x = -121
输出：false

### 翻转法

> 对比 x 和翻转后的 x 是否相等

```js
var isPalindrome = function (x) {
  if (x < 0 || (!(x % 10) && x)) return false;

  let oldx = x;
  let newx = 0;

  while (oldx) {
    newx = newx * 10 + (oldx % 10);
    oldx = ~~(oldx / 10);
  }

  return x === newx;
};
```

### 指针查找

> 转换成字符串从两端分别开始向内查找

```js
var isPalindrome = function (x) {
  if (x < 0 || (!(x % 10) && x)) return false;
  const stringX = String(x);
  let left = 0;
  let right = stringX.length - 1;
  while (left < right) {
    if (stringX.charAt(left) === stringX.charAt(right)) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};
```

## [正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)

给你一个字符串  s  和一个字符规律  p，请你来实现一个支持 '.'  和  '\*'  的正则表达式匹配。

'.' 匹配任意单个字符
'\*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖   整个   字符串  s 的，而不是部分字符串。

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。

```js
const isMatch = (s, p) => {
  if (s == null || p == null) return false;

  const sLen = s.length,
    pLen = p.length;

  // : 创建二维矩阵
  const dp = new Array(sLen + 1)
    .fill()
    .map(() => new Array(pLen + 1).fill(false));
  // : 0 0 位置默认相等
  dp[0][0] = true;
  // : 第一行匹配规则和其他行规则不同单独匹配
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == '*') dp[0][j] = dp[0][j - 2];
  }

  // : 匹配其他行，从 1 1 位置开始
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      // : 如果s和p当前字符是相等的 或者p当前位置是. 则当前的dp[i][j] 可由dp[i - 1][j - 1]转移过来
      // : 当前位置相匹配，则s和p都向前看一位 如果前面所有字符相匹配 则当前位置前面的所有字符也匹配
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        // : 进入当前字符不匹配的分支 如果当前p是* 则有可能会匹配
        // : s当前位置和p前一个位置相同 或者p前一个位置等于. 则有三种可能
        // : 其中一种情况能匹配 则当前位置的状态也能匹配
        // : dp[i][j - 2]：p向前看2个位置，相当于*重复了0次，
        // : dp[i][j - 1]：p向前看1个位置，相当于*重复了1次
        // : dp[i - 1][j]：s向前看一个位置，相当于*重复了n次
        if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          // : s当前位置和p前2个位置不匹配，则相当于*重复了0次
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen]; // : 长sLen的s串`` 是否匹配 长pLen的p串
};
```

## [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

给定一个长度为 n 的整数数组  height 。有  n  条垂线，第 i 条线的两个端点是  (i, 0)  和  (i, height[i]) 。
找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。

![盛最多水的容器](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

输入：[1,8,6,2,5,4,8,3,7]
输出：49

> 盛水面积受到两端最矮的一端和距离的影响，用双指针从两端向中心移动

```js
var maxArea = function (height) {
  let maxArea = 0;
  // 左右指针
  let r = 0;
  let j = height.length - 1;

  while (r < j) {
    let area = Math.min(height[r], height[j]) * (j - r);
    maxArea = Math.max(maxArea, area);
    // 哪一端小,就移动哪一端小
    if (height[r] < height[j]) {
      r++;
    } else {
      j--;
    }
  }
  return maxArea;
};
```

## [整数转罗马数字](https://leetcode-cn.com/problems/integer-to-roman/)

罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符 数值
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做  IIII，而是  IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为  IX。这个特殊的规则只适用于以下六种情况：

I  可以放在  V (5) 和  X (10) 的左边，来表示 4 和 9。
X  可以放在  L (50) 和  C (100) 的左边，来表示 40 和  90。 
C  可以放在  D (500) 和  M (1000) 的左边，来表示  400 和  900。

输入: num = 3
输出: "III"

> 模拟记录表 然后遍历向下匹配，如果数值大于当前字母则用当前字母表示并减去当前数字，然后继续匹配

```js
var intToRoman = function (num) {
  // 模拟字母表
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let roman = '';

  for (let i = 0; i < valueSymbols.length; i++) {
    const [value, symbol] = valueSymbols[i];

    while (num >= value) {
      num -= value;
      roman += symbol;
    }

    if (num == 0) break;
  }
  return roman;
};
```

## [罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)

规则同上一题，方向输出

> 思路同上一题，但也有不同，如果小字符出现在大字符左侧则为**减法**，右侧则为**加法**

```js
var romanToInt = function (s) {
  const valueSymbols = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let ans = 0;

  const n = s.length;

  for (let i = 0; i < n; i++) {
    const currValue = valueSymbols[s[i]];
    const beforValue = valueSymbols[s[i + 1]] || 0;
    if (currValue >= beforValue) {
      ans += currValue;
    } else {
      ans -= currValue;
    }
  }

  return ans;
};
```

## [最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/solution/)

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

输入：strs = ["flower","flow","flight"]
输出："fl"

> 纵向对比：最长公共前缀长度不会大于最小长度字符串,然后遍历数组纵向对比 如果相同则记录，否则退出遍历

```js
var longestCommonPrefix = function (strs) {
  const minLength = Math.min(...strs.map((e) => e.length));
  let prefix = '';
  for (let i = 0; i < minLength; i++) {
    let t = '';
    for (let j = 0; j < strs.length; j++) {
      const string = strs[j];
      const ct = string.charAt(i);
      if (t !== '' && t !== ct) return prefix;
      t = ct;
    }

    prefix += t;
  }

  return prefix;
};
```

## [三数之和](https://leetcode-cn.com/problems/3sum/)

给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

> 对数组进行排序，然后对排序后的数组进行双指针判断

```js
var threeSum = function (nums) {
  let ans = [];
  const length = nums.length;
  if (nums == undefined || length < 3) return ans;

  // 排序 方便后续遍历
  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    const currItem = nums[i];
    // 当前值大于 0 说明右边的所有值都已经大于 0 没有必要继续遍历
    if (currItem > 0) break;

    // 当前值等于前一个值，跳过循环，去重
    if (i > 0 && currItem === nums[i - 1]) continue;

    let L = i + 1;
    let R = length - 1;

    // 双指针
    while (L < R) {
      const sum = currItem + nums[L] + nums[R];
      // 三数之和等于 0
      if (!sum) {
        ans.push([currItem, nums[L], nums[R]]);

        // 去重
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        // 指针向中心移动
        L++;
        R--;
      } else if (sum < 0) {
        // 小于 0 说明左边的值小，需要向右移动
        L++;
      } else if (sum > 0) {
        // 大于 0 说明右边的值大，需要向左移动
        R--;
      }
    }
  }
  return ans;
};
```

## [最接近的三数之和](https://leetcode-cn.com/problems/3sum/)

给你一个长度为 n 的整数数组  nums  和 一个目标值  target。请你从 nums 中选出三个整数，使它们的和与  target  最接近。
返回这三个数的和。
假定每组输入只存在恰好一个解

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

> 双指针思路和上一题一样，这题判断绝对值就可以了

```js
var threeSumClosest = function (nums, target) {
  const length = nums.length;
  if (nums == undefined || length < 3) return 0;

  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < length; i++) {
    const currItem = nums[i];

    let L = i + 1;
    let R = length - 1;

    while (L < R) {
      let sum = currItem + nums[L] + nums[R];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      } else {
        return closest;
      }
    }
  }

  return closest;
};
```

## [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字  2-9  的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

![电话号码的字母组合](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/11/09/200px-telephone-keypad2svg.png)

> 回溯 根据数字创建对应字母组合，回溯过程中维护一个字符串，字符串初始化为空，每次去取一位数字，从哈希表中获取对应数字对应的所有字母，并将字母插入到已有的字母排序后面

```js
var letterCombinations = function (digits) {
  const length = digits.length;
  if (!length) return [];
  let phoneMap = new Map();
  phoneMap.set('2', 'abc');
  phoneMap.set('3', 'def');
  phoneMap.set('4', 'ghi');
  phoneMap.set('5', 'jkl');
  phoneMap.set('6', 'mno');
  phoneMap.set('7', 'pqrs');
  phoneMap.set('8', 'tuv');
  phoneMap.set('9', 'wxyz');

  const res = [];
  const dfs = (currStr, i) => {
    if (i > length - 1) {
      res.push(currStr);
      return;
    }

    const letters = phoneMap.get(digits[i]);
    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];
      dfs(currStr + letter, i + 1);
    }
  };
  dfs('', 0);

  return res;
};
```

## [四数之和](https://leetcode-cn.com/problems/4sum/)

给你一个由 n 个整数组成的数组  nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组  [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

```js
var fourSum = function (nums, target) {
  const quadruplets = [];
  if (nums.length < 4) {
    return quadruplets;
  }

  nums.sort((x, y) => x - y);

  const length = nums.length;

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target)
      break;

    if (
      nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] <
      target
    )
      continue;

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

      if (
        nums[i] + nums[j] + nums[length - 2] + nums[length - 1] <
        target
      )
        continue;

      let left = j + 1,
        right = length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          left++;

          while (left < right && nums[right] === nums[right - 1])
            right--;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
};
```

## [删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

![删除链表的倒数第 N 个结点](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

### 单调栈

> 单调栈 先遍历一遍链表，把所有的节点保存到栈中，最后弹出对应个数，然后链接链表

```js
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let stack = [];
  let curr = dummy;
  while (curr != null) {
    stack.push(curr);
    curr = curr.next;
  }

  for (let i = 0; i < n; i++) {
    stack.pop();
  }

  let prev = stack.pop();
  prev.next = prev.next.next;
  return dummy.next;
};
```

### 计算链表长度

> 先确定从哪一个下标开始，这样就能确定最后在哪一个结束，最后拼接链表

```js
var removeNthFromEnd = function (head, n) {
  let fast = head,
    solw = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    solw = solw.next;
  }

  solw.next = solw.next.next;

  return head;
};
```

## [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

> 栈 根据规则可知，出现右括号时必须有左括号，如果遇到左括号就入栈，遇到右括号时对比栈顶元素是否能够匹配

```js
var isValid = function (s) {
  const length = s.length;

  if (length % 2) return false;

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const stk = [];
  for (let i = 0; i < length; i++) {
    const ch = s[i];

    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }

  return !stk.length;
};
```

## [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的

![合并两个有序链表](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

### 递归

```js
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
```

### 迭代

> list11 和 list2 不为空时，判断链表的头节点哪一个更小，将较小的节点添加到当前节点后一个，对应链表节点后移一位

```js
var mergeTwoLists = function (list1, list2) {
  // 创建一个头部节点
  const head = new ListNode(0);
  // curr 用于动态更新当前值
  let curr = head;
  // 两个都不 !== null 就继续迭代
  while (list1 !== null && list2 !== null) {
    // 判断当前值大小
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    // 更新当前值
    curr = curr.next;
  }

  // 最佳最后未排序的部分
  curr.next = list1 === null ? list2 : list1;

  return head.next;
};
```

## [括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

### 回溯

![图解](https://pic.leetcode-cn.com/1600428729-tjBQsP-image.png)

```js
var generateParenthesis = function (n) {
  const res = [];
  const dfs = (l, r, str) => {
    if (str.length == 2 * n) {
      res.push(str);
      return;
    }

    if (l > 0) {
      dfs(l - 1, r, str + '(');
    }
    if (l < r) {
      dfs(l, r - 1, str + ')');
    }
  };

  dfs(n, n, '');

  return res;
};
```

## [合并 K 个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
1->4->5,
1->3->4,
2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

### 逃课算法

> 😂 这个算法属于是逃课了！先遍历链表，取出所有的值存放到数组中，然后对数组进行排序，最后生成一个新的链表

```js
var mergeKLists = function (lists) {
  const list = [];

  lists.forEach((node) => {
    while (node) {
      list.push(node.val);
      node = node.next;
    }
  });

  list.sort((a, b) => a - b);

  const res = new ListNode(0);

  let now = res;

  for (let i = 0; i < list.length; i++) {
    now.next = new ListNode(list[i]);
    now = now.next;
  }

  return res.next;
};
```

### 分治

> 分治 把数组里面的链表两两分组排序，将排序后的结果保存到数组，最后再递归数组达到目的 [合并两个有序链表](#21.合并两个有序链表)

```js
var mergeKLists = function (lists) {
  // 分治
  if (lists.length <= 1) return lists[0] || null;

  const newLists = [];

  for (let i = 0; i < lists.length; i += 2) {
    newLists.push(merage(lists[i], lists[i + 1] || null));
  }

  return mergeKLists(newLists);
};

// 合并两个有序链表
function merage(list1, list2) {
  let preHead = new ListNode(0);
  let prev = preHead;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }

    prev = prev.next;
  }

  prev.next = list1 == null ? list2 : list1;

  return preHead.next;
}
```

## [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

![两两交换链表中的节点](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

输入：head = [1,2,3,4]
输出：[2,1,4,3]

### 递归

```js
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
};
```

### 迭代

> 创建一个新节点，更换当前指向节点后两个元素，最后改变当前指向节点

```js
// 创建一个头节点
let dummyHeader = new ListNode(0);
dummyHeader.next = head;
// 当前节点指向最初头部节点
let temp = dummyHeader;

// 切换当前节点后的两个节点
while (temp.next !== null && temp.next.next !== null) {
  // 后一个节点
  const node1 = temp.next;
  // 后两个节点
  const node2 = temp.next.next;
  // 切换
  temp.next = node2;
  node1.next = node2.next;
  node2.next = node1;
  // 最后改变当前指向节点

  temp = node1;
}

return dummyHeader.next;
```

## [K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

给你一个链表，每  k  个节点一组进行翻转，请你返回翻转后的链表。
k  是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是  k  的整数倍，那么请将最后剩余的节点保持原有顺序

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

> 根据给定长度进行分组翻转，然后链接上一个节点和下一个节点

```js
// 翻转链表
const myReverse = (head, tail) => {
  let prev = tail.next;
  let curr = head;

  while (prev != tail) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return [tail, head];
};

var reverseKGroup = function (head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let prev = hair;

  // 遍历 不断移动头部节点
  while (head) {
    // 尾部节点
    let tail = prev;

    // 找出每一组的尾部节点
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      // 如果尾巴为空直接返回
      if (!tail) return hair.next;
    }

    // 保存尾部节点的下一个节点
    const next = tail.next;
    // 翻转链表
    [head, tail] = myReverse(head, tail);
    // 修改新链表的指向
    prev.next = head;
    tail.next = next;
    // 修改前一个节点 继续往后移动头部节点
    prev = tail;
    head = tail.next;
  }
  return hair.next;
};
```

## [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

![题目](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

> 迭代 首先创建一个 `prev` 保存值为空（准确说这个值应该是最后一个节点的下一个节点），然后判断当前当前节点是否有值，如果有值就更改它的下一个值的指向为 `prev` ，再改变当前值往后移动

```js
var reverseList = function (head) {
  // 前一个节点
  let prev = null;
  // 当前节点头
  let curr = head;
  // 判断当前节点是否有值
  while (curr) {
    // 下一个值
    const next = curr.next;
    // 更改当前链表指向前一个
    curr.next = prev;
    // 往后移动 当前节点赋值为前一个
    prev = curr;
    // 下一个值保存为当前值
    curr = next;
  }
  return prev;
};
```

## [删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

```js
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (!n) return 0;
  // 从下标 1 开始 第一个默认不重复
  let fast = 1;
  let slow = 1;

  while (fast < n) {
    // 快指针前后对比是否相同，如果不同代表新值
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
```

## [移除元素](https://leetcode-cn.com/problems/remove-element/)

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]

> 双向遍历，从两端开始匹配，如果左指针的值等于 val 就把右指针的值拿过来，然后移动右指针，重复操作，最后返回左指针的长度

```js
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
```

## [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

给你两个字符串  haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回   -1 。

输入：haystack = "hello", needle = "ll"
输出：2

输入：haystack = "aaaaa", needle = "bba"
输出：-1

### 截取支付串

> 其实也是一种暴力算法 首先对比首字母是否相同，首字母相同然后再比剩下的字字符串

```js
var strStr = function (haystack, needle) {
  if (needle == '') return 0;

  const n = haystack.length;
  const m = needle.length;
  let index = -1;

  for (let i = 0; i < n; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + m) === needle) {
        index = i;
        break;
      }
    }
  }

  return index;
};
```

### 暴力算法

> 两个 for 暴力循环挨个对比

```js
var strStr = function (haystack, needle) {
  if (needle == '') return 0;

  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i + m < n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i] !== needle[j]) {
        flag = false;
        break;
      }
    }

    if (flag) return i;
  }

  return -1;
};
```

## 两数相除

给定两个整数，被除数  dividend  和除数  divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
返回被除数  dividend  除以除数  divisor  得到的商。

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2

> 暴力算法的一种优化，一直去找 被除数中有多少个除数

```js
var divide = function (dividend, divisor) {
  // 被除数不能为0
  if (!dividend) return 0;

  // 判断最大最小值
  const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];

  if (dividend === MIN && divisor === -1) return MAX;
  if (dividend === MIN && divisor === 1) return MIN;

  // 判断符号 | 位异符 二进制位不同位 1
  const isNeg = (dividend ^ divisor) < 0;

  // 取绝对值
  [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];

  let res = 0;

  // 开始遍历
  for (let i = 31; i >= 0; i--) {
    // dividend / 2^i 是否大于 divisor
    if (dividend >>> i >= divisor) {
      // 大于说明 dividend 中有 2^i 个 divisor
      res += 1 << i;
      // dividend 减去 2^i 个 divisor
      dividend -= divisor << i;
    }
  }

  return isNeg ? -res : res;
};
```

## 串联所有单词的子串

给定一个字符串  s  和一些 长度相同 的单词  words 。找出 s 中恰好可以由  words 中所有单词串联形成的子串的起始位置。

注意子串要与  words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑  words  中单词串联的顺序。

输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words || !words.length) return [];
  let windows = {},
    needs = {},
    oneWordLen = words[0].length;
  for (let w of words) {
    needs[w] ? needs[w]++ : (needs[w] = 1);
  }
  let l = 0,
    r = 0,
    count = 0,
    needsKeyLen = Object.keys(needs).length,
    ans = [];
  for (let i = 0; i < oneWordLen; i++) {
    windows = {};
    r = l = i;
    count = 0;
    while (r <= s.length - oneWordLen) {
      let w1 = s.slice(r, r + oneWordLen);
      r += oneWordLen;
      if (!needs[w1]) {
        windows = {};
        l = r;
        count = 0;
        continue;
      }
      windows[w1] ? windows[w1]++ : (windows[w1] = 1);
      if (windows[w1] === needs[w1]) count++;
      while (count === needsKeyLen) {
        if (r - l === oneWordLen * words.length) ans.push(l);
        let w2 = s.slice(l, l + oneWordLen);
        l += oneWordLen;
        if (needs[w2]) {
          windows[w2]--;
          if (windows[w2] < needs[w2]) count--;
        }
      }
    }
  }
  return ans;
};
```

## [下一个排列](https://leetcode-cn.com/problems/next-permutation/)

整数数组的一个 排列 就是将其所有成员以序列或线性顺序排列。
例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1]
例如，arr = [1,2,3] 的下一个排列是 [1,3,2]

输入：nums = [1,2,3]
输出：[1,3,2]

```js
var nextPermutation = function (nums) {
  const length = nums.length;
  let i = length - 2;

  // 已知线性数组，从数组结尾往前找出第一组，前一个数小于后一个数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // 往 i + 1 往后找，有没有大于 nums[i] 的数
    let j = i + 1;
    while (nums[j + 1] > nums[i]) {
      j++;
    }
    // 更换位置
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 最后 把剩下数组按升序排序
  let l = i + 1;
  let r = length - 1;

  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
```

## [最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/)

给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

输入：s = "(()"
输出：2

输入：s = ")()())"
输出：4

```js
var longestValidParentheses = function (s) {
  const length = s.length;
  let stack = [-1];
  let count = 0;
  for (let i = 0; i < length; i++) {
    let t = s[i];

    if (t == '(') {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length) {
        count = Math.max(count, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return count;
};
```

## [搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

整数数组 nums 按升序排列，数组中的值 互不相同
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

> 二分查找 暴力解法的优化 从数组中间位置一分为二，然后判断哪一个符合条件，继续遍历。已知是排序的数组，如果中间位置大于起始位置，说明左边部分是有序的，反之这是右边是有序的，然后缩短两边范围重复操作

```js
var search = function (nums, target) {
  const length = nums.length;

  let left = 0;
  let right = length - 1;
  let mid;

  debugger;
  while (left <= right) {
    mid = (left + right) >> 1;

    if (nums[mid] === target) return mid;

    // 左侧部分为升序
    if (nums[mid] >= nums[left]) {
      // 如果目标值在 left 和 mid 下标之间，缩短 right 的值，否则缩短 left
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右侧部分
      // 如果目标值在 mid 和 right 下标之间，缩短 left的值，否则缩短 right
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
```

## [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回  [-1, -1]。

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

```js
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target && nums[right] === target) {
      return [left, right];
    }

    if (nums[left] !== target) {
      left++;
    }

    if (nums[right] !== target) {
      right--;
    }
  }

  return [-1, -1];
};
```

## [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

输入: nums = [1,3,5,6], target = 5
输出: 2

输入: nums = [1,3,5,6], target = 0
输出: 0

```js
var searchInsert = function (nums, target) {
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  let ans = length;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
```

## [有效的数独](https://leetcode-cn.com/problems/valid-sudoku/)

请你判断一个  9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字  1-9  在每一行只能出现一次。
数字  1-9  在每一列只能出现一次。
数字  1-9  在每一个以粗实线分隔的  3x3  宫内只能出现一次。（请参考示例图）

![数独](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png)

输入：board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true

> 创建哈希表记录每一个元素出现的次数，行和列长度都是 9 ，小九宫格则是 3\*3 的数组，根据规律可知 `[i/3][j/3]` 刚好对应小九宫格的下标位置，从 0-9 记录每一个数出现的次数，匹配到就加 1，如果对应位置值大于 1 说明重复，则跳出循环

```js
var isValidSudoku = function (board) {
  // 创建哈希表来记录每一个元素出现的次数，默认出现次数都为 0

  // 9 行
  const rows = new Array(9).fill().map((e) => new Array(9).fill(0));
  // 9 列
  const columns = new Array(9).fill().map((e) => new Array(9).fill(0));
  // 每一个九宫格 分别是一个 3 * 3 的格子
  const subboxes = new Array(3)
    .fill()
    .map((e) => new Array(3).fill().map((e) => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c === '.') continue;
      // 当前元素为 1 - 10 减 1 当做下标去匹配
      const index = +c - 1;
      // 遍历到 i 行 j 列 每个元素出现次数加 1
      rows[i][index]++;
      columns[j][index]++;
      // i / 3 判断横向第几个
      // j / 3 判断竖向第几个
      subboxes[~~(i / 3)][~~(j / 3)][index]++;

      // 如果大于 1 说明出重复直接退出循环
      if (
        rows[i][index] > 1 ||
        columns[j][index] > 1 ||
        subboxes[~~(i / 3)][~~(j / 3)][index] > 1
      ) {
        return false;
      }
    }
  }

  return true;
};
```

## [解数独](https://leetcode-cn.com/problems/sudoku-solver/)

![题目](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png)

![答案](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714_solutionsvg.png)

### 基础回溯版本

```js
var solveSudoku = function (board) {
  // 检查是否包含某一个元素
  const hasConflit = (r, c, val) => {
    // 检查行和列有没有相同数值， [r][i] 表示行， [i][j] 表示列
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === val || board[i][c] === val) {
        return true;
      }
    }

    // 每一个小框也按3个一组分下小标 分别为  0 3 6
    const subRowsStart = ~~(r / 3) * 3;
    const subColStart = ~~(c / 3) * 3;

    // 判断每一个小框有没有相同数值
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (val === board[subRowsStart + i][subColStart + j])
          return true;
      }
    }

    return false;
  };

  // 回溯主要函数
  const fill = (i, j) => {
    // 如果 j === 9 说明列到底了，这一列填完就可以下一行了
    if (j === 9) {
      i++;
      j = 0;
      // i === 9 就说明都填完了 可以返回了
      if (i === 9) return true;
    }

    // 如果当前值不是空格，说明填过了，直接进行下一个
    if (board[i][j] != '.') return fill(i, j + 1);

    // 枚举所有可能性
    for (let n = 1; n <= 9; n++) {
      // 检查是否存在冲突
      if (hasConflit(i, j, String(n))) continue;
      // 没有冲突可以赋值
      board[i][j] = String(n);
      // 如果基于当前解，可以得出最后结果直接返回 true
      if (fill(i, j + 1)) return true;
      // 如果基于当前解，不能得出最后结果 0 - 9 都不行，需要恢复为空格
      board[i][j] = '.';
    }

    // 最后都尝试完了，也没有 true，最后返回 false
    return false;
  };

  fill(0, 0);

  return board;
};
```

### 空间换时间回溯版本

```js
var solveSudoku = function (board) {
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // 存放每一行对应的可选数集
  const rows = new Array(9).fill(9).map((e) => new Set(options));
  // 存放每一列对应的可选数集
  const cols = new Array(9).fill(9).map((e) => new Set(options));
  // 存放每一框对应的可选数集
  const blocks = new Array(9).fill(9).map((e) => new Set(options));

  // 根据坐标，获取所在的小框的索引
  const getBlockIndex = (i, j) => {
    // |0 是向下取整
    return (((i / 3) | 0) * 3 + j / 3) | 0;
  };

  for (let i = 0; i < 9; i++) {
    // 根据现有的已填的数字，更新set们
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') {
        // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
        rows[i].delete(board[i][j]);
        cols[j].delete(board[i][j]);
        blocks[getBlockIndex(i, j)].delete(board[i][j]);
      }
    }
  }

  const fill = (i, j) => {
    if (j == 9) {
      // 列越界，就填下一行
      i++;
      j = 0;
      if (i == 9) return true; // 都填完了 返回true
    }
    if (board[i][j] != '.') return fill(i, j + 1); // 如果不是空格，递归填下一格

    const blockIndex = getBlockIndex(i, j); // 获取所在小框的索引

    for (let num = 1; num <= 9; num++) {
      // 枚举出所有选择：1-9
      const s = String(num);
      // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
      if (
        !rows[i].has(s) ||
        !cols[j].has(s) ||
        !blocks[blockIndex].has(s)
      )
        continue;

      board[i][j] = s; // 作出选择
      rows[i].delete(s); // 更新set们，删掉这个可填选项
      cols[j].delete(s);
      blocks[blockIndex].delete(s);

      if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
      // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空格
      board[i][j] = '.';
      rows[i].add(s); // set们，将之前删掉的当前数字，加回来
      cols[j].add(s);
      blocks[blockIndex].add(s);
    }
    return false; // 尝试了1-9，每个都往下递归，都不能做完，返回false
  };

  fill(0, 0); // 填格子的起点
  return board;
};
```

## [外观数列](https://leetcode-cn.com/problems/count-and-say/)

给定一个正整数 n ，输出外观数列的第 n 项。
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

### 滚动遍历 + 指针

```js
var countAndSay = function (n) {
  // 初始值
  let str = '1';

  for (let i = 1; i < n; i++) {
    let currStr = '';
    let fast = 0;
    let slow = 0;

    // 快指针不能大于当前字符长度
    while (fast < str.length) {
      // 如果就相同元素则需要判断出现次数
      while (fast < str.length && str[slow] === str[fast]) {
        fast++;
      }
      // 次数加上数值
      currStr += fast - slow + str[slow];
      // 移动慢指针
      slow = fast;
    }
    // 一轮执行完毕
    str = currStr;
  }

  return str;
};
```

### 递归 + 指针

```js
var countAndSay = function (n) {
  if (n === 1) return '1';

  // 递归
  let pre = countAndSay(n - 1);
  let resule = '';
  let left = 0;
  let right = 0;

  while (right < pre.length) {
    while (right < pre.length && pre[left] === pre[right]) {
      right++;
    }
    resule += right - left + pre[left];
    left = right;
  }

  return resule;
};
```

## [组合总和](https://leetcode-cn.com/problems/combination-sum/)

给你一个 无重复元素 的整数数组  candidates 和一个目标整数  target ，找出  candidates  中可以使数字和为目标数  target 的 所有   不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]

### 回溯

```js
var combinationSum = function (candidates, target) {
  const length = candidates.length;
  const ans = [];
  const dfs = (target, combine, idx) => {
    // 结束递归
    if (idx === length) return;

    // 这个值刚刚好被减完，将数组添加到结果列表
    if (target === 0) {
      ans.push(combine);
      return;
    }

    // 递归
    dfs(target, combine, idx + 1);

    let curr = candidates[idx];
    // curr 小于 target 还可以继续往下执行
    if (target - curr >= 0) {
      dfs(target - curr, [...combine, curr], idx);
    }
  };

  dfs(target, [], 0);

  return ans;
};
```

## [组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)

给定一个候选人编号的集合  candidates  和一个目标数  target ，找出  candidates  中所有可以使数字和为  target  的组合。

candidates  中的每个数字在每个组合中只能使用   一次。

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

### 回溯

```js
var combinationSum2 = function (candidates, target) {
  // 排序方便去重
  candidates.sort((a, b) => a - b);

  const length = candidates.length;
  const ans = [];

  const dfs = (start, combine, sum) => {
    // 结束递归的条件：1. 当前求和大于目标值 2. 当前求和值等于目标值时将当前值数组添加到结果数组
    if (sum >= target) {
      if (sum === target) {
        ans.push([...combine]);
      }
      return;
    }

    // 枚举当前可选的数，从start开始
    for (let i = start; i < length; i++) {
      // 当前选项和左邻选项一样，跳过
      if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
        continue;
      }

      const item = candidates[i];
      // 添加目标值数组
      combine.push(item);
      // 往下继续选择，同时sum累加上当前数字，防止选择数字重复
      dfs(i + 1, combine, sum + candidates[i]);
      // 撤销选择
      combine.pop();
    }
  };

  dfs(0, [], 0);
  return ans;
};
```

## [缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)

给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

### 哈希表

> 遍历数组，对于遍历到的 x 如果他的范围在 [1-N]，那么就将数组中 x-1 这个位置打上**标记**，在遍历结束后，如果所有位置都有标记，那么结果就是 N+1，否则答案就是最小没有被打上标记的位置加 1

```js
var firstMissingPositive = function (nums) {
  const length = nums.length;

  // 第一遍 把所有非正整数转换成 length + 1
  for (let i = 0; i < length; i++) {
    if (nums[i] <= 0) {
      nums[i] = length + 1;
    }
  }

  // 第二遍 将所有数值对应位置数值改为负数 相当于在对应下标位置打上标记
  for (let i = 0; i < length; i++) {
    const num = Math.abs(nums[i]);
    if (num <= length) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  // 第三遍 判断下标是否被标记过
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return length + 1;
};
```

### 交换法

```js
var firstMissingPositive = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; ++i) {
    while (
      nums[i] > 0 &&
      nums[i] <= length && // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] != nums[i] // 已经出现在理想位置的，就不用交换
    ) {
      const temp = nums[nums[i] - 1]; // 交换
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return length + 1;
};
```

## [接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![接雨水](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6

### 单调栈

> 维护一个单调栈保存下标，遍历数组，遍历到 i 时，如果栈内至少有两个元素，栈顶元素为 top，top 下面一个为 left，如果 `height[i] > height[top]`，则可以得到一个蓄水区间，蓄水区域宽度为 `i - left - 1`，区域高度为 `Math.min(height[left], height[i]) - height[top]`，根据高宽求出面积

```js
var trap = function (height) {
  let ans = 0;
  let stack = [];

  const n = height.length;

  for (let i = 0; i < n; i++) {
    // 栈有长度并且栈顶下标元素的值小于当前下标元素的值
    while (
      stack.length &&
      height[stack[stack.length - 1]] < height[i]
    ) {
      // 弹栈
      const top = stack.pop();
      // 弹栈后如果为空栈则说明不蓄水
      if (!stack.length) break;
      // 现在栈顶保存的值为蓄水区间左边界
      const left = stack[stack.length - 1];
      // 蓄水区间宽度
      const currWidth = i - left - 1;
      // 蓄水区间高度
      const currHeight =
        Math.min(height[left], height[i]) - height[top];
      // 累加面积
      ans += currWidth * currHeight;
    }

    stack.push(i);
  }
  return ans;
};
```

### 双指针

> 维护两个指针 left 和 right，以及两个变量 leftMax 和 rightMax，左边雨水量通过 leftMax - height[left] 得出 右边通过 rightMax - height[right]，当指针相遇时就可以得到雨水总量

```js
var trap = function (height) {
  const length = height.length;
  let ans = 0;
  // 左右指针，和左右最大值
  let left = 0;
  let right = length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    // 更新左右最大值
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);

    // 蓄水区间的值根据最大值减去当前值得出
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      left++;
    } else {
      ans += rightMax - height[right];
      right--;
    }
  }

  return ans;
};
```

## [字符串相乘](https://leetcode-cn.com/problems/multiply-strings/)

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

输入: num1 = "2", num2 = "3"
输出: "6"

```js
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const n = num1.length;
  const m = num2.length;

  // num1 * num2 的结果位数最长不会超过两数位置之和
  let res = new Array(n + m).fill(0);

  // 模拟竖乘
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      // 当位数的积
      const mul = (num1[i] - 0) * (num2[j] - 0);

      // 乘积对应的位置
      const p1 = i + j;
      const p2 = i + j + 1;
      // 加上之前的结果
      let sum = mul + res[p2];
      // 进位
      res[p2] = sum % 10;
      res[p1] += ~~(sum / 10);
    }
  }

  let i = 0;
  // 去除前面的所有 0
  while (i < res.length && res[i] === 0) {
    i++;
  }

  // 返回最后的结果
  let str = '';
  for (; i < res.length; i++) {
    str += res[i];
  }
  return str;
};
```

## [通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)

给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '\*' 的通配符匹配。

```js
var isMatch = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array(sLen + 1)
    .fill()
    .map((e) => new Array(pLen + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= pLen; i++) {
    dp[0][i] = p[i - 1] === '*' && dp[0][i - 1];
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*' && (dp[i - 1][j] || dp[i][j - 1])) {
        dp[i][j] = true;
      }
    }
  }
  return dp[sLen][pLen];
};
```

## [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)

给你一个非负整数数组  nums ，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
你的目标是使用最少的跳跃次数到达数组的最后一个位置。

输入: nums = [2,3,1,1,4]
输出: 2

### 反向模拟跳跃

```js
var jump = function (nums) {
  // 需要达到的位置
  let position = nums.length - 1;
  // 统计步骤
  let steps = 0;
  // : 模拟跳跃 一开始需要达到的位置是数组最后一个元素，查找谁可以跳跃到最后一个位置，然后把目标切换为当前值，继续查找，只到最后目标为 0，完成跳跃，统计次数
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
};
```

### 贪婪算法

```js
var jump = function (nums) {
  const length = nums.length;
  let steps = 0;
  let end = 0;
  let maxPos = 0;
  for (let i = 0; i < length - 1; i++) {
    // 找到跳的最远的
    maxPos = Math.max(nums[i] + i, maxPos);
    // 遇到边界，更新边界，步数加一
    if (i == end) {
      end = maxPos;
      steps++;
    }
  }
  return steps;
};
```

## [全排列](https://leetcode-cn.com/problems/permutations/)

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

### 回溯

```js
var permute = function (nums) {
  // 结果数组
  const res = [];
  // 哈希表
  const user = new Set();

  const dfs = (list) => {
    // 个数选够了，将当前 list 添加到结果数组
    if (list.length === nums.length) {
      res.push([...list]);
      return;
    }

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      // 当前值是已被使用 如果使用直接跳过
      if (user.has(num)) continue;
      // 添加当前结果
      list.push(num);
      // 添加到状态表
      user.add(num);
      // 用当前选择的值，进行递归
      dfs(list);
      // 上一句递归的结果，将最后选出来的数弹出
      list.pop();
      // 从状态表中删除该元素，后续可继续使用
      user.delete(num);
    }
  };

  dfs([]);

  return res;
};
```

## [全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

### 回溯

```js
var permuteUnique = function (nums) {
  const res = [];
  // 和上一题不同 创建一个下标哈希表
  const user = new Array(nums.length);
  // 排序方便去重
  nums.sort((a, b) => a - b);

  const dfs = (list) => {
    if (list.length === nums.length) {
      res.push([...list]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (user[i]) continue;
      // 增加判断，同一级重复的元素，并且保存上一个元素没有被使用过
      if (i - 1 >= 0 && num === nums[i - 1] && !user[i - 1]) {
        continue;
      }

      list.push(num);
      user[i] = true;
      dfs(list);
      list.pop();
      user[i] = false;
    }
  };

  dfs([]);
  return res;
};
```

## [旋转图像](https://leetcode-cn.com/problems/rotate-image/)

给定一个 n × n 的二维矩阵  matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]

## 借助数组

```js
var rotate = function (matrix) {
  const n = matrix.length;

  const new_matrix = new Array(n)
    .fill()
    .map((e) => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      new_matrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = new_matrix[i][j];
    }
  }

  return matrix;
};
```

### 原地翻转

```js
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < ~~(n / 2); i++) {
    for (let j = 0; j < ~~((n + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];

      matrix[j][n - 1 - i] = temp;
    }
  }
  return matrix;
};
```

## [字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

### 数组排序哈希表

```js
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const array = Array.from(str);
    array.sort();
    const key = array.toString();

    const list = map.has(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }

  return Array.from(map.values());
};
```

### 字母出现次数哈希表

```js
var groupAnagrams = function (strs) {
  const map = new Object();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const count = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const c = str[j];
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }

    if (map[count]) {
      map[count].push(str);
    } else {
      map[count] = [str];
    }
  }

  return Object.values(map);
};
```

## [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)

实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

输入：x = 2.00000, n = 10
输出：1024.00000

```js
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;

  while (n) {
    if (n & 1) result *= x;

    x *= x;
    n >>>= 1;
  }

  return result;
};
```

## [N 皇后](https://leetcode-cn.com/problems/n-queens/)

## [N 皇后 II](https://leetcode-cn.com/problems/n-queens-ii/)

n  皇后问题 研究的是如何将 n  个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的  n  皇后问题 的解决方案。

每一种解法包含一个不同的  n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

![示例1](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

### 回溯

```js
var solveNQueens = function (n) {
  // 创建一个 n * n 的列表 填充为 .
  const board = new Array(n).fill().map((e) => new Array(n).fill('.'));

  const res = [];

  // 判断是否存在 列相同、正对角线、反对角线相等的元素
  const isValid = (row, col) => {
    // 遍历
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        // 判断列 i === col
        // i + j === row + col 正对角线
        // i - j === row - col 反对角线
        if (
          board[i][j] === 'Q' &&
          (j === col || i + j === row + col || i - j === row - col)
        ) {
          return false;
        }
      }
    }
    return true;
  };

  // 递归
  const helper = (row) => {
    if (row === n) {
      res.push(board.map((e) => e.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        // 修改当前值
        board[row][col] = 'Q';
        helper(row + 1);
        // 当前结果错误，撤销修改
        board[row][col] = '.';
      }
    }
  };

  // 从第一行开始
  helper(0);

  return res;
};
```

## [最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

```js
var maxSubArray = function (nums) {
  const length = nums.length;
  // 前一个值
  let pre = 0;
  // 最大值
  let maxAns = nums[0];

  for (let i = 0; i < length; i++) {
    const x = nums[i];
    // 拿当前值和前面累加值中较大的值，如果当前值大于前面值，前面的值就不需要了，如果小于说明这个值还可以累加
    pre = Math.max(pre + x, x);
    // 判断最大值
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
};
```

## [螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)

给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

![示例一](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

### 模拟移动

```js
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const order = [];

  // 定义上下左右四个位置
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;

  // 条件达成继续循环
  while (left <= right && top <= bottom) {
    // 向右移动，从 left 移动到 right 的位置，top 不变
    // 1 -> 2 -> 3
    for (let x = left; x <= right; x++) {
      order.push(matrix[top][x]);
    }

    // 向下移动，从 top + 1 移动到 bottom，right 不变
    // 6 -> 9
    for (let y = top + 1; y <= bottom; y++) {
      order.push(matrix[y][right]);
    }

    if (left < right && top < bottom) {
      // 向左移动，从 right - 1 到 left
      // 8 -> 7
      for (let x = right - 1; x > left; x--) {
        order.push(matrix[bottom][x]);
      }
      // 向上移动，从 bottom 到 top
      // 4
      for (let y = bottom; y > top; y--) {
        order.push(matrix[y][left]);
      }
    }

    // 第一圈指向完毕，修改起始位置和外框界限

    left++;
    top++;
    right--;
    bottom--;
  }

  return order;
};
```

## [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)

给定一个非负整数数组  nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。

输入：nums = [2,3,1,1,4]
输出：true

### 反向查找

```js
var canJump = function (nums) {
  // 最后一个下标位置
  let end = nums.length - 1;

  // 从最后下标位置前一个开始遍历
  for (let i = nums.length - 2; i >= 0; i--) {
    // 能够达到最后一个位置，修改最终位置为当前下标
    if (i + nums[i] >= end) {
      end = i;
    }
  }

  return end === 0;
};
```

### 模拟跳跃

```js
var canJump = function (nums) {
  const length = nums.length;
  if (length === 1) return true;

  // 从第一个位置开始
  let cover = nums[0];
  // 遍历到当前能跳跃到的最远距离
  for (let i = 0; i <= cover; i++) {
    // 更新最远距离
    cover = Math.max(cover, nums[i] + i);
    // 达到目标
    if (cover >= length - 1) return true;
  }

  return false;
};
```

## [合并区间](https://leetcode-cn.com/problems/merge-intervals/)

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回   一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间  。

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]

```js
var merge = function (intervals) {
  // 排序每一组按第一个元素升序排列
  intervals.sort((a, b) => a[0] - b[0]);

  const length = intervals.length;
  const res = [];
  let prev = intervals[0];

  for (let i = 1; i < length; i++) {
    let cur = intervals[i];
    // 前一个值的结束元素和当前值的起始元素比较
    if (prev[1] >= cur[0]) {
      // 更新为结束最大值
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      // 添加到结果数组
      res.push(prev);
      // 更新前一个值
      prev = cur;
    }
  }

  res.push(prev);
  return res;
};
```

## [插入区间](https://leetcode-cn.com/problems/insert-interval/)

给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]

```js
var insert = function (intervals, newInterval) {
  const length = intervals.length;
  const res = [];

  // 数组是排序过的
  let i = 0;

  // 从头到尾 寻找到 新区间左侧为止
  while (i < length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // 到这里就已经碰到重叠的区间了，一直遍历到 原区间起始值大于新区间结束值为止
  while (i < length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  // 添加到结果新区间数组
  res.push(newInterval);

  // 最后这些都是不需要操作的
  while (i < length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};
```

## [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

输入：s = "Hello World"
输出：5

```js
var lengthOfLastWord = function (s) {
  // 反向遍历
  let i = s.length - 1;
  // 排查后面所有空格
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  // 非空格时的长度
  let length = i;

  // 排查所有非空格元素
  while (i >= 0 && s[i] != ' ') {
    i--;
  }

  // 返回最后长度
  return length - i;
};
```

## [螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

![实例1](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]

> 思路基本同 [螺旋矩阵](#54螺旋矩阵)

```js
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map((e) => new Array(n).fill(0));

  let top = 0,
    left = 0,
    right = n - 1,
    bottom = n - 1,
    count = 1;

  while (left <= right && top <= bottom) {
    for (let x = left; x <= right; x++) {
      matrix[top][x] = count++;
    }

    for (let y = top + 1; y <= bottom; y++) {
      matrix[y][right] = count++;
    }

    if (left < right && top < bottom) {
      for (let x = right - 1; x > left; x--) {
        matrix[bottom][x] = count++;
      }

      for (let y = bottom; y > top; y--) {
        matrix[y][left] = count++;
      }
    }

    left++;
    top++;
    right--;
    bottom--;
  }
  return matrix;
};
```

## [排列序列](https://leetcode-cn.com/problems/permutation-sequence/)

给出集合  [1,2,3,...,n]，其所有元素共有  n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当  n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定  n 和  k，返回第  k  个排列。

### 规律法

![](https://pic.leetcode-cn.com/1599266729-gCmAqu-image.png)
![](https://pic.leetcode-cn.com/1599267310-MISEdp-image.png)
![](https://pic.leetcode-cn.com/1599268506-CzOvtM-image.png)

```js
var getPermutation = function (n, k) {
  // 以 n = 4, k = 10 为例

  const nums = [];
  let factorial = 1; // 阶乘

  for (let i = 1; i <= n; i++) {
    nums.push(i); // [1, 2, 3, 4]
    factorial *= i; // 4! 24
  }

  k--; //索引从 0 开始，长度减一

  let resStr = '';

  while (nums.length > 0) {
    factorial = factorial / nums.length; // 3!.. 2!.. 1!..
    const index = ~~(k / factorial); // 当前选中的下标
    resStr += nums[index]; // 加上当前选中的值
    nums.splice(index, 1); // 从 nums 中移除选中数字
    k = k % factorial; // 更新 k 开始下一轮
  }

  return resStr;
};
```

## [ 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置

![示例2](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

输入：head = [0,1,2], k = 4
输出：[2,0,1]

```js
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) return head;

  let n = 1;
  let curr = head;
  // 找到链表最后一个元素，和链表长度
  while (curr.next) {
    curr = curr.next;
    n++;
  }

  // k % n 为旋转多少次
  // n - (k % n) 为往后移动多少位
  let add = n - (k % n);

  if (add === n) return head;

  // 闭合链表
  curr.next = head;

  // 找出指定位置元素
  while (add) {
    curr = curr.next;
    add--;
  }

  // 结果就是下一个元素
  const res = curr.next;
  // 断开链表
  curr.next = null;

  return res;
};
```

## [不同路径](https://leetcode-cn.com/problems/unique-paths/)

一个机器人位于一个 m x n  网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

![示例1](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

输入：m = 3, n = 7
输出：28

### 动态规划

> 顶部边缘格和左侧边缘格只有一种走法，向左或者向下，所以初始化二维矩阵默认值为一，然后从 i = 1，j = 1 开遍历，当前格的路径由顶部格子和左侧格子的路径决定，所以动态方程：`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`

```js
var uniquePaths = function (m, n) {
  // 创建 m * n 的矩阵
  const matrix = new Array(m).fill(1).map((e) => new Array(n).fill(1));

  // 动态规划：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};
```

### 空间优化版

```js
var uniquePaths = function (m, n) {
  let cur = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 累加每一行的结果
      cur[j] += cur[j - 1];
    }
  }
  return cur[n - 1];
};
```

## [不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)

一个机器人位于一个  m x n  网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
网格中的障碍物和空位置分别用 1 和 0 来表示

![示例一](https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg)

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2

```js
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 处理起始点就是障碍物
  if (obstacleGrid[0][0] === 1) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 存放每一个点有几条路径可抵达
  const matrix = new Array(m).fill(0).map((e) => new Array(n).fill(0));

  // 起始位置
  matrix[0][0] = 1;

  // 第一列 遇到障碍物或者路矩阵前一个被障碍物堵死 路径为 0 否则为 1
  for (let i = 1; i < m; i++) {
    matrix[i][0] =
      obstacleGrid[i][0] === 1 || matrix[i - 1][0] === 0 ? 0 : 1;
  }

  // 同第一行
  for (let i = 1; i < n; i++) {
    matrix[0][i] =
      obstacleGrid[0][i] === 1 || matrix[0][i - 1] === 0 ? 0 : 1;
  }

  // 迭代
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 遇到障碍物为 0 否则就是路径动态公式 dp[i][j] =  dp[i - 1][j] + dp[i][j - 1]

      matrix[i][j] =
        obstacleGrid[i][j] === 1
          ? 0
          : matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};
```

## [最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)

给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。

![示例一](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7

```js
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 第一列的每一格最短路径
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // 第一行的每一格最短路径
  for (let i = 1; i < n; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  // 迭代
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前路径加 上一格和左一格的最短路径
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};
```

## [有效数字](https://leetcode-cn.com/problems/valid-number/)

有效数字（按顺序）可以分成以下几个部分：

一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数

小数（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（'+' 或 '-'）
2. 下述格式之一：
   1. 至少一位数字，后面跟着一个点 '.'
   2. 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
   3. 一个点 '.' ，后面跟着至少一位数字

整数（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（'+' 或 '-'）
2. 至少一位数字

![状态图解](https://pic.leetcode-cn.com/0683d701f2948a2bd8c235867c21a3aed5977691f129ecf34d681d43d57e339c-DFA.jpg)

```js
var isNumber = function (s) {
  let state = 0,
    finals = [0, 0, 0, 1, 0, 1, 1, 0, 1],
    transfer = [
      [0, 1, 6, 2, -1, -1],
      [-1, -1, 6, 2, -1, -1],
      [-1, -1, 3, -1, -1, -1],
      [8, -1, 3, -1, 4, -1],
      [-1, 7, 5, -1, -1, -1],
      [8, -1, 5, -1, -1, -1],
      [8, -1, 6, 3, 4, -1],
      [-1, -1, 5, -1, -1, -1],
      [8, -1, -1, -1, -1, -1],
    ],
    make = (c) => {
      switch (c) {
        case ' ':
          return 0;
        case '+':
        case '-':
          return 1;
        case '.':
          return 3;
        case 'e':
        case 'E':
          return 4;
        default:
          let code = c.charCodeAt();
          if (code >= 48 && code <= 57) {
            return 2;
          } else {
            return 5;
          }
      }
    };
  for (let i = 0; i < s.length; ++i) {
    state = transfer[state][make(s[i])];
    if (state < 0) return false;
  }
  return !!finals[state];
};
```

## [加一](https://leetcode-cn.com/problems/plus-one/)

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

输入：digits = [1,2,3]
输出：[1,2,4]

```js
var plusOne = function (digits) {
  const length = digits.length;

  // 从后往前遍历
  for (let i = length - 1; i >= 0; i--) {
    // 当前位加一
    digits[i]++;
    // 十进制 %10 取余
    digits[i] %= 10;
    // 是否需要进位，不需要则可以直接返回
    if (digits[i]) {
      return digits;
    }
  }
  // 最后执行到这里说明后面每一位都需要进位，所以添加 1
  return [1, ...digits];
};
```

## [二进制求和](https://leetcode-cn.com/problems/add-binary/)

给你两个二进制字符串，返回它们的和（用二进制表示）。
输入为 非空 字符串且只包含数字 1 和 0。

输入: a = "1010", b = "1011"
输出: "10101"

```js
var plusOne = function (digits) {
  const length = digits.length;

  // 从后往前遍历
  for (let i = length - 1; i >= 0; i--) {
    // 当前位加一
    digits[i]++;
    // 十进制 %10 取余
    digits[i] %= 10;
    // 是否需要进位，不需要则可以直接返回
    if (digits[i]) {
      return digits;
    }
  }
  // 最后执行到这里说明后面每一位都需要进位，所以添加 1
  return [1, ...digits];
};
```

## [文本左右对齐](https://leetcode-cn.com/problems/text-justification/)

给定一个单词数组  words 和一个长度  maxWidth ，重新排版单词，使其成为每行恰好有  maxWidth  个字符，且左右两端对齐的文本。
你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格  ' '  填充，使得每行恰好有 maxWidth  个字符。
要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
文本的最后一行应为左对齐，且单词之间不插入额外的空格。

输入: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

```js
const fullJustify = (words, maxWidth) => {
  const ans = [];

  let right = 0,
    n = words.length;

  while (true) {
    const left = right; // 当前行的第一个单词在 words 的位置
    let sumLen = 0; // 统计这一行单词长度之和

    while (
      right < n &&
      sumLen + words[right].length + right - left <= maxWidth
    ) {
      sumLen += words[right].length;
      right++;
    }

    // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
    if (right === n) {
      const s = words.slice(left).join(' ');
      ans.push(s + blank(maxWidth - s.length));
      break;
    }

    // 当前行单词数量
    const numWords = right - left;
    // 空格数量
    const numSpaces = maxWidth - sumLen;

    // 当前行只有一个单词：该单词左对齐，在行末填充空格
    if (numWords === 1) {
      ans.push(words[left] + blank(numSpaces));
      continue;
    }

    // 当前行不只一个单词
    // 平均空格数量
    const avgSpaces = Math.floor(numSpaces / (numWords - 1));
    // 剩余空格个数
    const extraSpaces = numSpaces % (numWords - 1);

    const s1 = words
      .slice(left, left + extraSpaces + 1)
      .join(blank(avgSpaces + 1)); // 拼接额外加一个空格的单词

    const s2 = words
      .slice(left + extraSpaces + 1, right)
      .join(blank(avgSpaces)); // 拼接其余单词

    ans.push(s1 + blank(avgSpaces) + s2); // 和平两个单词块
  }

  return ans;
};

const blank = (n) => {
  return new Array(n).fill(' ').join('');
};
```

## [x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

给你一个非负整数 x ，计算并返回  x  的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x \*\* 0.5 。

输入：x = 4
输出：2

> 二分查找 不断查找中间值

```js
var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = x >>> 1; // 除以 2 并取整，缩小遍历范围

  // 退出循环时，它们相邻
  while (left + 1 < right) {
    // 中间数
    let mid = (left + right) >>> 1;
    let p = mid * mid;
    if (p === x) {
      return mid;
    } else if (p < x) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right > x / right ? left : right;
};
```

## [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

输入：n = 2
输出：2

> 动态规划 `dp[i] = dp[i - 2] + dp[i - 1]`

```js
var climbStairs = function (n) {
  // 动态规划  dp[i] = dp[i - 2] + dp[i - 1]

  const dp = new Array(n + 1).fill(1);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
```

## [简化路径](https://leetcode-cn.com/problems/simplify-path/)

给你一个字符串 path ，表示指向某一文件或目录的  Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..）  表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。

请注意，返回的 规范路径 必须遵循下述格式：

始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。

输入：path = "/home/"
输出："/home"

> 维护一个单调栈

```js
var simplifyPath = function (path) {
  // 根据 / 分割路径
  const names = path.split('/');
  // 维护一个栈
  const stack = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // 返回上一级 名称直接出栈即可
    if (name === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== '.') {
      // 有长度 并且不等于 . 可直接入栈
      stack.push(name);
    }
  }

  return '/' + stack.join('/');
};
```

## [编辑距离](https://leetcode-cn.com/problems/edit-distance/)

给你两个单词  word1 和  word2， 请返回将  word1  转换成  word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

输入：word1 = "horse", word2 = "ros"
输出：3

> 动态规划 [测试地址](https://alchemist-al.com/algorithms/edit-distance)

```js
var minDistance = function (word1, word2) {
  const length1 = word1.length;
  const length2 = word2.length;
  const dp = new Array(length1 + 1)
    .fill(0)
    .map((e) => new Array(length2 + 1).fill(0));

  // 初始化数组，word1 前 i 个字符最少需要 i 操作，比如 i 次删除
  for (let i = 1; i <= length1; i++) {
    dp[i][0] = i;
  }

  // 初始化数组，word2 前 j 个字符最少需要 j 操作，比如 j 次添加
  for (let j = 1; j <= length2; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      //  如果相等，说明该位置不用操作
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // dp[i - 1][j] 对应删除操作
        // dp[i][j - 1]  对应添加操作
        // dp[i - 1][j - 1] 对应替换操作
        const min = Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );

        // 找这些操作中最小数 + 1 等于本次操作
        dp[i][j] = min + 1;
      }
    }
  }

  return dp[length1][length2];
};
```

## [矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)

给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

![示例一](https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg)

> 用每一行列和每一行第一个元素做标记

```js
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 使用一个变量记录状态
  let flagCol0 = false;

  for (let i = 0; i < m; i++) {
    // 记录第一列是否出现过 0
    if (!matrix[i][0]) {
      flagCol0 = true;
    }

    for (let j = 1; j < n; j++) {
      // 用行和列第一个元素来做标记
      if (!matrix[i][j]) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  // 倒序遍历,防止每一列的第一个元素提前被更新
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0;
      }
    }

    // 出现过 0
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};
```

## [搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)

编写一个高效的算法来判断  m x n  矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

![示例一](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/mat2.jpg)

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

### 模拟坐标

```js
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  // 模拟坐标 从左下角
  let x = m - 1;
  let y = 0;

  while (x >= 0 && y <= n) {
    const curr = matrix[x][y];
    if (curr === target) {
      return true;
    } else if (curr > target) {
      // 当前值大于目标值 向上移动
      x--;
    } else {
      // 当前值小于目标值 向右移动
      y++;
    }
  }

  return false;
};
```

### 二分查找

```js
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;

  const m = matrix.length;
  const n = matrix[0].length;

  // 一头 一尾
  let low = 0,
    high = m * n - 1;

  // 开始二分查找
  while (low <= high) {
    // 每次循环的中间值
    const mid = ~~((high - low) / 2) + low;

    // 查找中间值对应矩阵的数值
    const x = matrix[~~(mid / n)][mid % n];
    // 二分查找
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
```

## [颜色分类](https://leetcode-cn.com/problems/sort-colors/)

给定一个包含红色、白色和蓝色、共  n 个元素的数组  nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库的 sort 函数的情况下解决这个问题。

### 双指针

```js
var sortColors = function (nums) {
  const length = nums.length;

  // 双指针
  let p0 = 0;
  let p1 = 0;

  for (let i = 0; i < length; i++) {
    // 当前值等于 1 和 p1 交换位置，指针向前移动
    if (nums[i] === 1) {
      swap(p1, i, nums);
      p1++;
    } else if (nums[i] === 0) {
      // 当前值等于 0 和 p0 交换位置
      swap(p0, i, nums);

      // 如果交换后 当前值等于 1 ,还需要和 p1 交换位置
      if (nums[i] === 1) {
        swap(p1, i, nums);
      }

      // 无论什么情况，和 p0 交换位置后 p1 都需要向前移动
      p0++;
      p1++;
    }
  }
};
```

## [最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)

> 动态窗口

```js
const minWindow = (s, t) => {
  const length = s.length;
  let minLen = length + 1; // 最小长度
  let start = length; // 结果子串起始位置
  let map = {}; // 存储目标字符和对应的缺失个数
  let missingType = 0; // 当前缺失的字符种类数

  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!map[c]) {
      missingType++; // 种类 +1
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let l = 0,
    r = 0;

  while (r < length) {
    let rightChar = s[r];

    if (typeof map[rightChar] !== 'undefined') map[rightChar]--; // 目标字符，它的缺失个数 -1
    if (map[rightChar] === 0) missingType--; // 缺失种类 -1

    // 当前窗口包含所有字符的前提下，缩小窗口
    while (!missingType) {
      // 窗口宽度如果比 minLen 小，就更新minLen
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        start = l; // 更新最小窗口起点
      }

      let leftChar = s[l]; // 左指针右移，左指针指向的字符要被窗口放弃
      if (typeof map[leftChar] !== 'undefined') map[leftChar]++; // 被舍弃的是目标字符，缺失个数 +1
      if (map[leftChar] > 0) missingType++; // 缺失个数 >0，缺失种类 +1
      l++; // 左指针移动
    }

    r++; // 右指针移动
  }

  if (start === length) return '';

  return s.substring(start, start + minLen); // 根据起始点和长度截取子串
};
```

## [组合](https://leetcode-cn.com/problems/combinations/)

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。

> 回溯

```js
var combine = function (n, k) {
  // 回溯 剪枝：用过的组合不在使用 比如 [1, 2] [2, 1]，后面的 [2, 1] 就不能再使用了，所以规定递归起点，1 过后然后是 2 ，这样就不会再出现 1

  const res = [];

  const dfs = (start, list) => {
    // 选够了，添加到结果数组
    if (list.length == k) {
      res.push([...list]);
      return;
    }

    for (let i = start; i <= n; i++) {
      list.push(i);
      dfs(i + 1, list);
      list.pop();
    }
  };

  dfs(1, []); // 从数字 1 开始选

  return res;
};
```

## [子集](https://leetcode-cn.com/problems/subsets/)

给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

### 回溯 1

> 每一个节点都有两个选择，选择或者不选择，以此递归到最后，指针触底的时候，返回一路选择的数

```js
var subsets = function (nums) {
  const res = [];

  const dfs = (index, list) => {
    // 指针触底
    if (index === nums.length) {
      res.push([...list]);
      return;
    }

    // 选择当前值
    list.push(nums[index]);
    // 基于选择，继续递归
    dfs(index + 1, list);

    // 上面的递归结束，撤销该选择
    list.pop();
    // 不选择这个数，继续往下递归
    dfs(index + 1, list);
  };

  dfs(0, []);

  return res;
};
```

### 回溯 2

> 动态起点 在执行子递归之前，加入解集，用 for 枚举当前可选的数，如果第一个数选择了 1，第二个数就只能 2，3 选一个

```js
var subsets = function (nums) {
  const { length } = nums;
  const res = [];
  // 动态起点
  const dfs = (start, list) => {
    // 提前加入解集
    res.push([...list]);

    // 从该 start 开始往后遍历
    for (let i = start; i < length; i++) {
      // 选择当前值
      list.push(nums[i]);
      // 基于选这个数，继续递归，传入 i + 1
      dfs(i + 1, list);
      // 撤销这个数
      list.pop();
    }
  };

  dfs(0, []);
  return res;
};
```

## [单词搜索](https://leetcode-cn.com/problems/word-search/)

给定一个  m x n 二维字符网格  board 和一个字符串单词  word 。如果  word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

![示例一](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true

> 回溯 寻找一个起点，然后从四个方向开始递归，如果是我们需要的值，继续从四个方向开始递归（排查已查找的值）

```js
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  // 创建二维矩阵
  const user = new Array(m)
    .fill([])
    .map((e) => new Array(n).fill(false));

  // 递归
  const canFind = (row, col, i) => {
    // 长度相等
    if (i === word.length) {
      return true;
    }

    // 越界了
    if (row < 0 || row >= m || col < 0 || col >= n) return false;

    // user[row][col] === true 该视被使用过
    // board[row][col] !== word[i] 不是需要的值
    if (user[row][col] || board[row][col] !== word[i]) return false;

    // 使用当前值
    user[row][col] = true;

    // 基于当前选择的点[row,col]，能否找到剩余字符的路径
    const canFindRest =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1);

    // 基于当前值到达终点
    if (canFindRest) {
      return true;
    } else {
      // 撤销当前值，返回 false
      user[row][col] = false;
      return false;
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
```

## [删除有序数组中的重复项 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]

> 双指针 从下标 2 开始遍历 快指针和慢指针前两个对比

```js
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (!n) return 0;

  let fast = 2;
  let slow = 2;

  // 因为最多重复两个，所以从下标 2 开始比对
  while (fast < n) {
    // 快指针只用和慢指针的前两个对比即可知道是不是重复了两边以上 太妙了！！！
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
```

## [搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false

> 二分查找

```js
var search = function (nums, target) {
  const { length } = nums;
  if (length === 0) return false;
  if (length === 1) return nums[0] === target;

  let left = 0;
  let right = length - 1;

  // 二分查找
  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] === target) return true;
    // 原数组存在相同元素
    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      left++;
      right--;
    }
    // 同搜索旋转数组排序
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
```

## [删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

![示例一](https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg)

输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]

```js
var deleteDuplicates = function (head) {
  if (!head) return head;

  // 创建一个新头部节点
  const dummy = new ListNode(0, head);

  let curr = dummy;
  // 是否存在下一个节点和下下一个节点
  while (curr.next && curr.next.next) {
    // 节点重复
    if (curr.next.val === curr.next.next.val) {
      // 记录重复的元素
      const x = curr.next.val;
      while (curr.next && curr.next.val === x) {
        // 剔除重复元素
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};
```

## [删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

![示例](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

输入：head = [1,1,2,3,3]
输出：[1,2,3]

```js
var deleteDuplicates = function (head) {
  if (!head) return head;

  let curr = head;

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
```

## [柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

![示例一](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

输入：heights = [2,1,5,6,2,3]
输出：10

> 单调栈 维护一个单调栈存放下标，当前元素如果比栈顶元素大直接入栈，因为还没有到达极限，如果小于栈顶元素，说明已经到达极限了，栈顶元素出栈并记录下标，然后计算面积 `heights[stackTopIndex] * (i - 1 - stack[stack.length - 1])` 继续循环。栈顶元素是否大于当前元素，直到小于当前元素，重新入栈，最后循环结束时，栈内可以还有元素，所以我们在列表前后都添加一个零，用来清空最后的栈

```js
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = []; // 单调递增，存放下标
  // 前后增加一个 0 ，用来清空栈里面的元素
  heights = [0, ...heights, 0];

  for (let i = 0; i < heights.length; i++) {
    // 当前元素对应的高度小于栈顶元素对应高度
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 出栈，并记录该元素下标
      const stackTopIndex = stack.pop();
      // 求最大面积
      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - 1 - stack[stack.length - 1])
      );
    }

    // 到这里 bar 比栈顶的元素高了，入栈
    stack.push(i);
  }

  return maxArea;
};
```

## [最大矩形](https://leetcode-cn.com/problems/maximal-rectangle/)

给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

![示例一](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)

输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6

### 暴力解法

![](https://pic.leetcode-cn.com/1635075706-IiAzIa-image.png)
![](https://pic.leetcode-cn.com/1634695537-UuTCHT-image.png)

```js
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  if (m === 0) return;

  const n = matrix[0].length;

  // 准备一个二维矩阵 初始值都为 0 用来保存连续 1 的次数
  const left = new Array(m).fill([]).map((e) => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        // 每一行第一个初始值为 1
        if (j === 0) {
          left[i][j] = 1;
        } else {
          // 后面的依次 +1
          left[i][j] = left[i][j - 1] + 1;
        }
      }
    }
  }

  let ret = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') continue;

      // 矩阵宽度
      let width = left[i][j];
      let area = width;

      // 从下往上遍历 从 i 开始
      for (let k = i - 1; k >= 0; k--) {
        // 面积宽度由这一列最小值决定
        width = Math.min(width, left[k][j]);
        // 面积 = (i - k + 1) * width
        area = Math.max(area, (i - k + 1) * width);
      }

      ret = Math.max(ret, area);
    }
  }

  return ret;
};
```

### 单调栈

> 借用上一题的求面积，把每一列都看做一个柱状图

```js
const m = matrix.length;
if (m === 0) return;

const n = matrix[0].length;

// 每一列的高度
const left = new Array(n).fill(0);
let res = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] === '1') {
      // 高度加一
      left[j] += 1;
    } else {
      // 高度清空
      left[j] = 0;
    }
  }
  // 每一列都就算一遍
  res = Math.max(res, largestRectangleArea(left));
}

return res;
```

## [分隔链表](https://leetcode-cn.com/problems/partition-list/)

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

![示例一](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]

```js
var partition = function (head, x) {
  // 创建一个大数链表
  let big = new ListNode(0);
  // 大数表头
  const bigHeader = big;
  // 创建一个小数链表
  let small = new ListNode(0);
  // 小数表头
  const smallHeader = small;

  while (head) {
    // 小于目标值，存入小数链表
    if (head.val < x) {
      small.next = head;
      // 更新链表
      small = small.next;
    } else {
      // 存入大数链表
      big.next = head;
      // 更新链表
      big = big.next;
    }

    head = head.next;
  }

  // 拼接
  big.next = null;
  small.next = bigHeader.next;

  return smallHeader.next;
};
```

## [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

给你两个按 非递减顺序 排列的整数数组  nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

```js
var merge = function (nums1, m, nums2, n) {
  // let p1 = 0;
  // let p2 = 0;
  // const sorted = new Array(m + n).fill(0);
  // while (p1 < m || p2 < n) {
  //   let curr = 0;
  //   if (p1 === m) {
  //     curr = nums2[p2++];
  //   } else if (p2 === n) {
  //     curr = nums1[p1++];
  //   } else if (nums1[p1] < nums2[p2]) {
  //     curr = nums1[p1++];
  //   } else {
  //     curr = nums2[p2++];
  //   }

  //   sorted[p1 + p2 - 1] = curr;
  // }

  // for (let i = 0; i < sorted.length; i++) {
  //   nums1[i] = sorted[i];
  // }

  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }

  for (let i = 0; i <= p2; i++) {
    nums1[i] = nums2[i];
  }
};
```

## [子集 II](https://leetcode-cn.com/problems/subsets-ii/)

给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

> 回溯 思路同[78 题](#78.子集)第二种解法，增加了排序和去重

```js
var subsetsWithDup = function (nums) {
  // 排序方便剔除重复元素
  nums.sort((a, b) => a - b);

  const { length } = nums;

  const res = [];
  // 回溯
  const dfs = (start, list) => {
    // 先添加到解集列表
    res.push([...list]);
    // 从 start 开始遍历
    for (let i = start; i < length; i++) {
      //  i > start 每一轮遍历第一个元素不会有重复，从 i > start 开始，查询元素是否于前一个相同
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      // 选择当前元素
      list.push(nums[i]);
      // 当前元素下标当做起点，继续递归
      dfs(i + 1, list);
      // 撤销当前选择
      list.pop();
    }
  };

  // 从下标 0 开始
  dfs(0, []);

  return res;
};
```

## [解码方法](https://leetcode-cn.com/problems/decode-ways/)

一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

```js
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。

```js
var numDecodings = function (s) {
  const n = s.length;
  const f = new Array(n + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= n; ++i) {
    if (s[i - 1] !== '0') {
      f[i] += f[i - 1];
    }
    if (
      i > 1 &&
      s[i - 2] != '0' &&
      (s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26
    ) {
      f[i] += f[i - 2];
    }
  }
  return f[n];
};
```

## [反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

给你单链表的头指针 head 和两个整数  left 和 right ，其中  left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

```js
var reverseBetween = function (head, left, right) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let count = 0;
  let p1 = dummyHead;
  let p2 = dummyHead;
  left--;
  // 寻找边界 left
  while (count < left) {
    p1 = p1.next;
    p2 = p2.next;
    count++;
  }

  // 寻找边界 right
  while (count < right) {
    p2 = p2.next;
    count++;
  }

  const dummyHead2 = new ListNode();
  dummyHead2.next = p2.next;
  p2.next = null;

  let reverseNode = p1.next; //当前要翻到后面去的点 最先开始的是 m 点——p1.Next
  // 开启循环，每次将一个点加入到接收链 成为头头
  while (reverseNode) {
    // 直到没有需要翻转的reverseNode
    const temp = reverseNode.next; // reverseNode的Next先保存一下
    reverseNode.next = dummyHead2.next; // 翻过去的点，指向接收链的头结点，即dummyHead2.Next
    dummyHead2.next = reverseNode; // dummyHead2的Next换人，头结点换成了新来的reverseNode
    reverseNode = temp; // 更新下一个要翻到后面去的reverseNode
  }

  p1.next = dummyHead2.next; // 前半部分的固定链，接上接收链的头结点
  return dummyHead.next;
};
```

## [复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]

### 回溯法

```js
var restoreIpAddresses = function (s) {
  const { length } = s;
  const res = [];

  // 从下标 0 开始
  const dfs = (start, list) => {
    // 长度满足，并且无剩余字符，满足条件，返回结果
    if (list.length === 4 && start === length) {
      res.push(list.join('.'));
      return;
    }

    // 长度满足但有剩余字符，结束递归
    if (list.length === 4 && start < length) {
      return;
    }

    // 枚举选出 3种切割方法
    for (let i = 1; i <= 3; i++) {
      // 长度越界，不能切割这个长度
      if (start + i - 1 >= s.length) return;

      // 不能切除 0x、0xx
      if (i !== 1 && s[start] == '0') return;

      // 当前选择切除片段
      const srt = s.substring(start, start + i);
      // 不能大于 255
      if (i == 3 && +srt > 255) return;

      // 选择当前结果，加入 list
      list.push(srt);
      // 基于当前选中，继续进行选择
      dfs(start + i, list);
      // 撤销选中，进行下一轮选
      list.pop();
    }
  };

  // 入口
  dfs(0, []);

  return res;
};
```

## [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

[示例 1](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

输入：root = [1,null,2,3]
输出：[1,3,2]

### 递归

```js
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (root === null) return;

    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };

  inorder(root);
  return res;
};
```

### 迭代

```js
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    // 不断的压入左节点
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 栈顶节点出栈
    root = stack.pop();
    // 添加到结果
    res.push(root.val);
    // 获取它的右节点
    root = root.right;
  }

  return res;
};
```

## [零钱兑换](https://leetcode-cn.com/problems/coin-change/)

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回  -1 。
你可以认为每种硬币的数量是无限的。

输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1

> 动态规划
> 例如：amount = 6 ， coins = [1,2,5]
> 去总金额一共有几种办法？
>
> 1.  拿面值为 1 的金币 加上总金额为 5 的最优硬币数量，即 dp[5] + 1
> 2.  拿面值为 2 的金币 加上总金额为 4 的最优硬币数量，即 dp[4] + 1
> 3.  拿面值为 5 的金币 加上总金额为 1 的最优硬币数量，即 dp[1] + 1
>
> 所以 dp[6] = Math.min(dp[5] + 1, dp[4] + 1, dp[1] + 1)
> 状态方程 dp[i] = Math.min(dp[i - coin] + 1，dp[i - coin] + 1，dp[i - coin] + 1，...) coin 为不同面值的金币

```js
var coinChange = function (coins, amount) {
  if (amount < 0) return 0;

  // 创建 dp 数组，下标对应该金额最少需要几枚硬币，初始值为无穷大
  const dp = new Array(amount + 1).fill(Infinity);
  // 金额为 0 是 不需要金币
  dp[0] = 0;

  // 循环金额
  for (let i = 1; i <= amount; i++) {
    // 不同面值的金额
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      // 金额 大于 面值才能使用
      if (i - coin >= 0) {
        // 动态转换方程
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
```

## [二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)

路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

![示例一](https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg)

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

```js
var maxPathSum = function (root) {
  // 最大路径之和
  let maxSum = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    if (root === null) return 0;

    // 左边树提供最大路径和
    const left = dfs(root.left);
    // 右边树提供最大路径和
    const right = dfs(root.right);

    // 当前子树内部最大路径和
    const innerMaxSum = left + root.val + right;

    // 挑战最大记录
    maxSum = Math.max(maxSum, innerMaxSum);

    // 当前子树对外提供的最大和
    const outputMaxSum = root.val + Math.max(0, left, right);

    // 如果对外提供的路径和为负，直接返回 0，否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };

  dfs(root);

  return maxSum;
};
```
