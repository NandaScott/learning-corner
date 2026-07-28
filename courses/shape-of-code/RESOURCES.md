# Resources — The Shape of Code

The primary source for the *examples* is a real design conversation, distilled into `lesson-briefs-shape-of-code.md` at the repo root (gitignored, like every other source brief). The primary sources for the *principles* and every *mechanism claim* are below. Each lesson cites the single best one.

## Principle sources (one per lesson)

| Lesson | Principle | Primary source |
|---|---|---|
| L1 | Complexity has symptoms: change amplification, cognitive load, unknown unknowns | Ousterhout, *A Philosophy of Software Design*, Ch. 2 "The Nature of Complexity" |
| L2 | Entities, invariants, aggregates as a consistency boundary | Vernon, *Domain-Driven Design Distilled*, Ch. 5 (Aggregates); Evans, *Domain-Driven Design* |
| L3 | Make illegal states unrepresentable | Minsky, "Effective ML revisited", Jane Street blog, 2011-03-09. <https://blog.janestreet.com/effective-ml-revisited/> |
| L3 | Discriminated unions and narrowing | TypeScript Handbook, "Narrowing". <https://www.typescriptlang.org/docs/handbook/2/narrowing.html> |
| L3 | Encoding the same idea without a compiler union | Wlaschin, "Designing with types: Making illegal states unrepresentable". <https://fsharpforfunandprofit.com/posts/designing-with-types-making-illegal-states-unrepresentable/> |
| L4 | Parse, don't validate | King, "Parse, don't validate", 2019-11-05. <https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/> |
| L5 | Avoid flag arguments; prefer separate methods | Fowler, "FlagArgument", 2011-06-23. <https://martinfowler.com/bliki/FlagArgument.html> |
| L6 | Correctness by construction | Amey, "Correctness by Construction: Better Can Also Be Cheaper", *CrossTalk*, March 2002 |
| L7 | Deep modules and information hiding | Ousterhout, *A Philosophy of Software Design*, Ch. 4 "Modules Should Be Deep" |
| L8 | Design as a written artefact before code | Vernon, *Domain-Driven Design Distilled*; the reading path below |

## Mechanism claims verified against primary docs

Nothing in this course is taught from memory. Each of these was fetched and read before the lesson that uses it was written.

- **Postgres 18**, "Schemas" — <https://www.postgresql.org/docs/current/ddl-schemas.html>. Unqualified names resolve against the `search_path` list, first match wins; `SET search_path TO myschema,public;`; default is `"$user", public`. The page's own security note: "adding a schema to `search_path` effectively trusts all users having `CREATE` privilege on that schema." Backs L6.
- **Django 6.0**, "Middleware" — <https://docs.djangoproject.com/en/stable/topics/http/middleware/>. A middleware is a callable taking `get_response`, with `__call__(request)` running once per request before the view; `MIDDLEWARE` applies top-down on the request phase and in reverse on the response phase. Backs L6's HTTP chokepoint.
- **Celery 5.6.3**, "Tasks" — <https://docs.celeryq.dev/en/stable/userguide/tasks.html>. `@app.task(base=MyTask)` sets a task's base class; `Celery('tasks', task_cls='your.module.path:DatabaseTask')` sets it app-wide; `before_start()` is a documented lifecycle hook. Backs L6's worker chokepoint.
- **TypeScript Handbook**, "Narrowing" — <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>. The `Shape` example with `radius?: number`, the statement that "the type-checker doesn't have any way to know whether or not `radius` or `sideLength` are present based on the `kind` property", and the definition of a discriminated union. Backs L3 and L5.
- **Django REST Framework**, "Serializers" — <https://www.django-rest-framework.org/api-guide/serializers/>. `.validated_data` holds the deserialized, validated data as a dict of native Python types; `is_valid(raise_exception=True)` raises `ValidationError`. Backs L4's honest account of where the proof gets dropped.

## Reading path (in order)

The order from the source document, kept as-is.

1. **A Philosophy of Software Design** — John Ousterhout. Start here. Closest direct match, and short. Ch. 2 (complexity's symptoms) and Ch. 4 (deep modules) are cited directly by this course.
2. **Domain-Driven Design Distilled** — Vaughn Vernon. Entities, invariants, and bounded contexts as formal vocabulary.
3. **Domain Modeling Made Functional** — Scott Wlaschin. The same ideas via types. Translates to TypeScript and Python without F#. The free "Designing with types" series is the same material online: <https://fsharpforfunandprofit.com/series/designing-with-types/>
4. **Grokking Simplicity** — Eric Normand. Builds the "what varies vs what is stable" muscle.

## Supporting reading

- **Alexis King**, "Parse, don't validate" — <https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/>. Also the source of the "shotgun parsing" framing, which King quotes from the LangSec literature: parsing and input-validating code mixed with and spread across processing code.
- **Yaron Minsky**, "Effective ML revisited" — <https://blog.janestreet.com/effective-ml-revisited/>. The slogan's home. Minsky coined it in his Effective ML guest lectures at Harvard.
- **Peter Amey**, "Correctness by Construction: Better Can Also Be Cheaper", *CrossTalk*, March 2002. The formal-methods lineage of the phrase, and the argument that structural prevention is cheaper than test-and-fix.

## Community (for wisdom, when a shape call is genuinely contested)

Shape arguments are settled by other engineers, not by a book. Places where the argument is had well:

- **Your own design review.** The best single move from the source document's exercise list: ask a reviewer "before you looked at my code, what shape did you expect this to have?" That gets someone else's pre-keyboard model directly, which is the thing you cannot get from reading.
- **r/ExperiencedDevs** — for the "how much structure is too much" question, which L7's visibility axis raises and does not close.
- **The DDD community** (dddcommunity.org, and the Domain-Driven Design Weekly newsletter) — for invariant and aggregate-boundary questions specifically.
- **lobste.rs** and the comment threads on King's and Fowler's posts — the counter-arguments to parse-don't-validate and to union-heavy modelling are worth reading, because they are the objections a colleague will actually raise.
