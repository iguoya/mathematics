# 引言



 测试
 ```mermaid
graph LR
    A(线性代数) --> B(基础)
    A --> C(主题)
    A --> D(应用)
    B --> B1(行列式)
    B-->B2(矩阵)

    C-->C1(向量组)
    C-->C2(方程组)
    C-->C3[11 分 大题]

    D-->D1(相似理论**)
    D-->D2(二次型)
    D-->D3[11 分 大题]

 ```

 ```mermaid
 graph LR
 A(分值分布)-->B(3*4' 小题)
 A-->C(2*11' 大题)
 A-->D(共 34 分)
 ```

 ---
 Supposing that $y >= 0$ and that $[\log x]$ represents the integer part of $\log x$, let:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

Obviously, when $0 <= y <= 1$, there is $\Phi(y) = 0$. For all $y >= 0$, $\Phi(y)$ is a non-decreasing function.

When $\log x>=10^4$ and $y>= e^{2{(\log x)}^{-0.1}}$, thus:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$