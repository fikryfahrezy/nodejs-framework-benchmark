# Node.js Framework Benchmark Result

## List of Framework

- [Bare Node.js (no framework) v.12.14.0 LTS](https://nodejs.org/en/)
- [Express v.4.17.1](https://expressjs.com/)
- [Koa v.2.13.0](https://koajs.com/)
- [Fastify v.3.6.0](https://www.fastify.io/)
- [Nest with Express Platform (default) v.7.4.4](https://nestjs.com/)
- [Nest with Fasitify Platform v.7.4.4](https://docs.nestjs.com/techniques/performance)

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

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 24 ms | 28 ms | 38 ms | 46 ms | 28.61 ms | 8.28 ms | 190 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| Req/Sec   | 12447   | 12447   | 13951   | 14303   | 13760.37 | 524.97  | 12443   |
| Bytes/Sec | 1.84 MB | 1.84 MB | 2.06 MB | 2.12 MB | 2.04 MB  | 77.8 kB | 1.84 MB |

Req/Bytes counts sampled once per second. 151k requests in 11.15s, 22.4 MB read

### Express v.4.17.1

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev    | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | -------- | ------ |
| Latency | 31 ms | 35 ms | 53 ms | 62 ms | 37.07 ms | 12.18 ms | 251 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- |
| Req/Sec   | 9047    | 9047    | 10959   | 11807   | 10676.73 | 928.45 | 9041    |
| Bytes/Sec | 1.34 MB | 1.34 MB | 1.62 MB | 1.75 MB | 1.58 MB  | 138 kB | 1.34 MB |

Req/Bytes counts sampled once per second. 117k requests in 11.17s, 17.4 MB read

### Koa v.2.13.0

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 27 ms | 30 ms | 37 ms | 41 ms | 30.33 ms | 6.49 ms | 165 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| Req/Sec   | 11615   | 11615   | 13223   | 13479   | 12998.19 | 552.02  | 11613   |
| Bytes/Sec | 1.82 MB | 1.82 MB | 2.08 MB | 2.12 MB | 2.04 MB  | 86.7 kB | 1.82 MB |

Req/Bytes counts sampled once per second. 143k requests in 11.12s, 22.4 MB read

### Fastify v.3.6.0

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 19 ms | 25 ms | 33 ms | 38 ms | 25.35 ms | 6.49 ms | 167 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- |
| Req/Sec   | 14327   | 14327   | 15703   | 16703   | 15506.19 | 730.74 | 14323   |
| Bytes/Sec | 2.12 MB | 2.12 MB | 2.32 MB | 2.47 MB | 2.29 MB  | 108 kB | 2.12 MB |

Req/Bytes counts sampled once per second. 171k requests in 11.13s, 25.2 MB read

### Nest with Express Platform (default) v.7.4.4

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg     | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | ------- | ------- | ------ |
| Latency | 40 ms | 45 ms | 58 ms | 78 ms | 46.4 ms | 9.65 ms | 185 ms |

| Stat      | 1%     | 2.5%   | 50%     | 97.5%  | Avg     | Stdev   | Min    |
| --------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ |
| Req/Sec   | 7815   | 7815   | 8647    | 9111   | 8533.28 | 388.96  | 7813   |
| Bytes/Sec | 1.8 MB | 1.8 MB | 1.99 MB | 2.1 MB | 1.96 MB | 89.5 kB | 1.8 MB |

Req/Bytes counts sampled once per second. 94k requests in 11.13s, 21.6 MB read

### Nest with Fasitify Platform v.7.4.4

Running 10s test @ http://localhost:5000/api?name=john with 400 connections

3rd test results

| Stat    | 2.5%  | 50%   | 97.5% | 99%   | Avg      | Stdev   | Max    |
| ------- | ----- | ----- | ----- | ----- | -------- | ------- | ------ |
| Latency | 21 ms | 26 ms | 37 ms | 42 ms | 26.37 ms | 7.52 ms | 183 ms |

| Stat      | 1%      | 2.5%    | 50%     | 97.5%   | Avg      | Stdev  | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- |
| Req/Sec   | 13679   | 13679   | 14815   | 17407   | 14906.91 | 958.69 | 13672   |
| Bytes/Sec | 2.27 MB | 2.27 MB | 2.46 MB | 2.89 MB | 2.47 MB  | 159 kB | 2.27 MB |

Req/Bytes counts sampled once per second. 164k requests in 11.13s, 27.2 MB read
