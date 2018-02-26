# side-nav

A React Side Nav Component

Forget about the style of the component, I am not a UX. HAHA. Feel free to change the style as you want.

![side-nav](https://user-images.githubusercontent.com/5471228/36662172-7c1a6014-1b18-11e8-92eb-32f330a4437b.gif)

How to use it?

```
import Nav from "../side-nav/Nav";
import NavGroup from "../side-nav/NavGroup";
import NavItem from "../side-nav/NavItem";
import Link from "../side-nav/Link";

<Nav className="customized-nav-container">
    <NavItem>
        <Link href="http://www.legulegu.com" target="_blank">www.legulegu.com</Link>
    </NavItem>
    <NavGroup title="波段分析">
        <NavItem>
            <Link href="https://legulegu.com/stockdata/market-analysis-shanghai" target="_blank">上证指数波段分析</Link>
        </NavItem>
        <NavItem>
            <Link href="https://legulegu.com/stockdata/market-analysis-chuangye" target="_blank">创业板波段分析</Link>
        </NavItem>
        <NavItem>
            <Link href="https://legulegu.com/stockdata/market-analysis-average-price" target="_blank">A股p平均股价</Link>
        </NavItem>
    </NavGroup>
    <NavGroup title="基本数据面">
        <NavItem>
            <Link href="https://legulegu.com/stockdata/market_pe" target="_blank">A股整体市盈率</Link>
        </NavItem>
        <NavItem>
            <Link href="https://legulegu.com/stockdata/shanghaiPE" target="_blank">上证A市盈率</Link>
        </NavItem>
    </NavGroup>
</Nav>
```
