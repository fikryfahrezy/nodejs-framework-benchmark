# Node.js Framework Benchmark Result

## List of Framework

- [Bare Node.js (no framework) v.12.14.0 LTS](https://nodejs.org/en/)
- [Express v.4.17.1](https://expressjs.com/)
- [Koa v.2.13.0](https://koajs.com/)
- [Fastify v.3.6.0](https://www.fastify.io/)
- [Nest with Express Platform (default) v.7.4.4](https://nestjs.com/)
- [Nest with Fasitify Platform v.7.4.4](https://docs.nestjs.com/techniques/performance)
- [Hapi v.20.0.3](https://hapi.dev/)
- [Restify v.8.5.1](http://restify.com/)

## Tools

- Laptop with medium specification
- Localhost
- [autocannon HTTP benchmarking tool](https://github.com/mcollina/autocannon)

## autocannon Config

- 400 connections
- Running for 10s

**autocannon command can be found in `.package.json` in the `"script"` section**

## Note

```
Please take a note, the result here just a synthetic benchmark, perhaps can't be an exact reference.
And this is just for fun, there is no other purpose.
```

## Results

### Bare Node.js (no framework) v.12.14.0 LTS

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 23 ms | 29 ms | 39 ms | 49 ms | 30.08 ms | 7.52 ms | 155 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg    | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- |
| Req/Sec   | 11999   | 11999   | 12751   | 15223   | 13096  | 920.87 | 11993   |
| Bytes/Sec | 2.29 MB | 2.29 MB | 2.44 MB | 2.91 MB | 2.5 MB | 176 kB | 2.29 MB |

Req/Bytes counts sampled once per second.

131k requests in 10.14s, 25 MB read

### Express v.4.17.1

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%    | Avg      | Stdev    | Max    |
| ------- | ----- | ----- | ----- | ------ | -------- | -------- | ------ |
| Latency | 20 ms | 65 ms | 84 ms | 111 ms | 65.71 ms | 13.39 ms | 164 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg     | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Req/Sec   | 5503    | 5503    | 6099    | 6391    | 6041.28 | 327.85  | 5502    |
| Bytes/Sec | 1.48 MB | 1.48 MB | 1.64 MB | 1.72 MB | 1.63 MB | 88.1 kB | 1.48 MB |

Req/Bytes counts sampled once per second.

66k requests in 11.13s, 17.9 MB read

### Koa v.2.13.0

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 34 ms | 37 ms | 47 ms | 62 ms | 38.53 ms | 8.07 ms | 173 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| Req/Sec   | 9247    | 9247    | 10391   | 10647   | 10267.21 | 401.47  | 9247    |
| Bytes/Sec | 1.85 MB | 1.85 MB | 2.08 MB | 2.13 MB | 2.05 MB  | 80.1 kB | 1.85 MB |

Req/Bytes counts sampled once per second.

103k requests in 10.13s, 20.5 MB read

### Fastify v.3.6.0

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ----- | ------ |
| Latency | 23 ms | 30 ms | 43 ms | 54 ms | 30.48 ms | 9 ms  | 181 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| Req/Sec   | 11527   | 11527   | 12703   | 15239   | 12935.64 | 1232.39 | 11527   |
| Bytes/Sec | 2.35 MB | 2.35 MB | 2.59 MB | 3.11 MB | 2.64 MB  | 251 kB  | 2.35 MB |

Req/Bytes counts sampled once per second.

142k requests in 11.14s, 29 MB read

### Nest with Express Platform (default) v.7.4.4

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5%  | 99%    | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ------ | ------ | -------- | ------- | ------ |
| Latency | 65 ms | 78 ms | 106 ms | 129 ms | 78.53 ms | 11.8 ms | 153 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg     | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Req/Sec   | 4355    | 4355    | 5127    | 5767    | 5059.46 | 354.19  | 4353    |
| Bytes/Sec | 1.16 MB | 1.16 MB | 1.36 MB | 1.53 MB | 1.35 MB | 94.3 kB | 1.16 MB |

Req/Bytes counts sampled once per second.

56k requests in 11.13s, 14.8 MB read

### Nest with Fasitify Platform v.7.4.4

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev    | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | -------- | ------ |
| Latency | 24 ms | 27 ms | 47 ms | 50 ms | 32.86 ms | 10.05 ms | 161 ms |

| Stat      | 1%      | 2.5%    | 50%    | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- |
| Req/Sec   | 8863    | 8863    | 12447  | 15495   | 12008.37 | 2723.17 | 8861    |
| Bytes/Sec | 1.85 MB | 1.85 MB | 2.6 MB | 3.24 MB | 2.51 MB  | 569 kB  | 1.85 MB |

Req/Bytes counts sampled once per second.

132k requests in 11.15s, 27.6 MB read

### Hapi v.20.0.3

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 34 ms | 45 ms | 63 ms | 77 ms | 46.51 ms | 9.65 ms | 168 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg     | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| Req/Sec   | 7223    | 7223    | 8487    | 9455    | 8516.19 | 745.98 | 7223    |
| Bytes/Sec | 1.79 MB | 1.79 MB | 2.11 MB | 2.34 MB | 2.11 MB | 185 kB | 1.79 MB |

Req/Bytes counts sampled once per second.

94k requests in 11.14s, 23.2 MB read

### Restify v.8.5.1

Date tested: Sunday, 17 January 2021

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev    | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | -------- | ------ |
| Latency | 40 ms | 52 ms | 80 ms | 91 ms | 53.28 ms | 10.65 ms | 171 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg     | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| Req/Sec   | 6563    | 6563    | 7595    | 8091    | 7444.19 | 475.24 | 6562    |
| Bytes/Sec | 1.35 MB | 1.35 MB | 1.56 MB | 1.67 MB | 1.53 MB | 98 kB  | 1.35 MB |

Req/Bytes counts sampled once per second.

82k requests in 11.14s, 16.9 MB read
