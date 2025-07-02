import json
from pathlib import Path

from langchain_community.document_loaders import JSONLoader

MY_JQ_SCHEMA = """
{
  stats: {
    start: .stats.start,
    end: .stats.end,
    passPercent: .stats.passPercent,
    skipped: .stats.skipped
  },
  results: [
    .results[] | {
      uuid,
      title,
      fullFile,
      tests: [
        .tests[] | {
          title,
          fullTitle,
          pass,
          fail,
          code,
          err: {
            message,
            estack,
            diff
          },
          skipped
        }
      ],
      suites: [
        .suites[] | {
          uuid,
          title,
          fullFile,
          tests,
          suites
        }
      ]
    }
  ]
}
"""

FILE_PATH = "./archives/json/fs-call-waiting_spec_pass_report.json"
data = json.loads(Path(FILE_PATH).read_text(encoding="utf-8"))
loader = JSONLoader(
    file_path=FILE_PATH,
    jq_schema=MY_JQ_SCHEMA,
    is_content_key_jq_parsable=True,
    text_content=False,
)
# loading phase
docs_lazy = loader.lazy_load()
for doc in docs_lazy:
    print("Metadata: ", doc.metadata)
    print("#" * 50)
    print(doc.page_content)
