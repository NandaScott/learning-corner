# Resources

High-trust sources backing the lessons. Primary sources first.

## Knowledge — primary / highest trust

- **[Analyzing the Limits of Connection Scalability in Postgres](https://techcommunity.microsoft.com/blog/adforpostgresql/analyzing-the-limits-of-connection-scalability-in-postgres/1757266)** — Andres Freund (core Postgres committer). The definitive measured analysis of *why* connections stop scaling: memory, context switching, `ProcArrayLock`. **Primary source for Lesson 1.** ([Citus mirror](https://www.citusdata.com/blog/2020/10/08/analyzing-connection-scalability/))
- **[PostgreSQL docs — Connection establishment](https://www.postgresql.org/docs/current/connect-estab.html)** — canonical description of the postmaster forking a backend per connection.
- **[Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections)** — Heroku Dev Center. Canonical treatment of Gunicorn workers × Django connections × pooling. **Primary source for Lesson 3.**
- **[Django docs — Persistent connections / `CONN_MAX_AGE`](https://docs.djangoproject.com/en/stable/ref/databases/#persistent-database-connections)** — authoritative on Django's own connection reuse. *(verify exact anchor when building Lesson 3)*
- **[PgBouncer docs — pooling modes](https://www.pgbouncer.org/features.html)** — authoritative on session/transaction/statement pooling. *(for Lesson 4)*

## Knowledge — supporting / explanatory

- [A Gentleman's Guide to PostgreSQL Connection Pooling](https://goldlapel.com/how-to/connection-pooling) — clean walkthrough of per-connection cost and setup latency.
- [PostgreSQL Connection Pooling Explained](https://sharafath.hashnode.dev/postgresql-connection-pooling-explained-how-it-works-and-why-it-matters) — accessible intro to the process-per-connection model.
- [Understanding Django, Gunicorn, and Database Connections](https://dev.to/sbshobhit/understanding-django-gunicorn-and-database-connections-5g50) — the per-worker connection accounting, concretely.
- [postgresql.org max_connections tuning (CYBERTEC)](https://www.cybertec-postgresql.com/en/tuning-max_connections-in-postgresql/) — practical sizing.

## To investigate later

- Django **5.1+ native pooling** (psycopg3 `pool` option) — newer alternative to PgBouncer; worth a lesson once fundamentals land.
- AWS RDS Proxy — managed pooler equivalent, if cloud context becomes relevant.

## Wisdom — communities

- *(to populate)* r/PostgreSQL, r/django, and the Postgres mailing lists / Discord for testing explanations against practitioners once the user wants to pressure-test understanding.
