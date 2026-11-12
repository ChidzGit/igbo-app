# Family recordings (audio/parent)

Drop recordings here and they play in the app instead of any other clip for the same word or sentence.

1. Record the word or sentence (mp3, m4a, wav or ogg).
2. Name each file with the Igbo text exactly as it is written in the app, tone marks and dots included, for example `àkwá.m4a`, `Kedụ.mp3`. (Characters that Windows does not allow in file names, such as `?`, cannot be used: list those files in `list.csv` instead.)
3. Or make a file `list.csv` in this folder with the columns `file,ig`, for example:

   ```
   file,ig
   recording-01.m4a,àkwá
   recording-02.m4a,Kedụ ka ị mere?
   ```

4. From the project folder run: `python -I tools/add_parent_audio.py`
   (add `--dry-run` first to preview). It prints every file it matched and every file it could not match. Nothing is guessed: if a name differs by a tone mark or a dot, it is reported as unmatched.
5. Commit and push so the clips reach the app.

The tool writes entries to `data/audio.js` with author "Family recording", licence "Shared by the family for this app" and source "parent". Parent entries always win over other clips, and `tools/fetch_audio.py` / `tools/fetch_audio_igboapi.py` never overwrite them.

Note: files pushed to GitHub are public (anyone can listen to and download them). Only add recordings the family is happy to share.
